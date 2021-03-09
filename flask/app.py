from flask import Flask,request
from flask_mysqldb import MySQL
from flask_httpauth import HTTPBasicAuth

app = Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'sarptalha'
# app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_DB'] = 'itusis'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'


mysql = MySQL(app)

@app.route("/create_tables")
def create_tables():
    cur = mysql.connection.cursor()
    
    cur.execute('''CREATE TABLE IF NOT EXISTS people (
    person_id INT AUTO_INCREMENT PRIMARY KEY,
    pname VARCHAR(255) NOT NULL,
    psurname VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );''')    
    
    cur.execute('''CREATE TABLE IF NOT EXISTS topics (
    class_name VARCHAR(6) PRIMARY KEY,
    class_desc VARCHAR(255),
    credits INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );''')    
    
    cur.execute('''CREATE TABLE IF NOT EXISTS classes (
    crn INT AUTO_INCREMENT PRIMARY KEY,
    c_teacher_id INT NOT NULL,
    c_class_name VARCHAR(6) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY(c_teacher_id)
    REFERENCES people (person_id),
    FOREIGN KEY(c_class_name)
    REFERENCES topics (class_name)
    );''')   

    cur.execute('''CREATE TABLE IF NOT EXISTS enrollment (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    crn INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY(student_id)
    REFERENCES people (person_id),
    FOREIGN KEY(crn)
    REFERENCES classes (crn)
    );''')   

    cur.execute('''CREATE TABLE IF NOT EXISTS grades (
    grade_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    class_name VARCHAR(6) NOT NULL,
    crn INT NOT NULL,
    grade VARCHAR(2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY(student_id)
    REFERENCES people (person_id),
    FOREIGN KEY(crn)
    REFERENCES classes (crn),
    FOREIGN KEY(class_name)
    REFERENCES topics (class_name)
    );''')        
    
    mysql.connection.commit()  
    return("success")

add_to_db_querries = {
    "user": '''
                INSERT INTO people (pname,psurname)
                VALUES ('{}','{}'); 
            ''' ,
    "topic": '''
                INSERT INTO topics (class_name,class_desc,credits)
                VALUES ('{}','{}',{}); 
            ''' ,
    "class": '''
                INSERT INTO classes (c_class_name,c_teacher_id)
                VALUES ('{}','{}'); 
            ''' ,
    "enrollment": '''
                INSERT INTO enrollment (student_id , crn)
                VALUES ('{}','{}'); 
            ''' ,
    "grade": '''
                INSERT INTO grades (student_id , class_name, grade, crn)
                VALUES ('{}','{}','{}',{}); 
            ''' ,
}

@app.route('/add_<entry>',methods = ["POST"])
def add_to_db(entry):
    if request.method == "POST" and entry in add_to_db_querries:
        cur = mysql.connection.cursor()
        cur.execute(add_to_db_querries[entry].format(*request.json.values()))
        mysql.connection.commit()
        return "added "+entry
    
def get_avg_grade(grades):
    if not grades: return 0
    grade_translation={"AA":4,"BA":3.5,"BB":3,"CB":2.5,"CC":2,"DC":1.5,"DD":1,"FF":0}
    return sum([grade_translation[grade] for grade in [student["grade"] for student in grades]])/len(grades)
    
@app.route('/student_info/<student_id>',methods = ["GET"])
def student_info(student_id):
    if request.method == "GET":
        cur = mysql.connection.cursor()   
        
        cur.execute(
        '''
        select classes.crn,c_class_name from classes 
        inner join enrollment on 
        classes.crn = enrollment.crn
        inner join topics on
        classes.c_class_name = topics.class_name
        inner join people on 
        people.person_id = enrollment.student_id
        where people.person_id = {};
        '''.format(student_id))
        
        classes = cur.fetchall()
        
        cur.execute(
        '''
        select grades.crn,topics.class_name,grade from grades
        inner join people on 
        grades.student_id = people.person_id
        inner join topics on 
        topics.class_name = grades.class_name
        where people.person_id = {};
        '''.format(student_id))

        grades = cur.fetchall()
        
        cur.execute(
        '''
        select pname,psurname from people where person_id = {}
        '''.format(student_id))       
        
        info= cur.fetchone()
        
        return {"classes":classes,"grades":grades,"GPA":get_avg_grade(grades),"personal information":info}
        
@app.route('/crn_info/<crn>',methods = ["GET"])
def crn_info(crn):
    if request.method == "GET":
        cur = mysql.connection.cursor()
        
        cur.execute(
        '''
        select pname as teacher_name,psurname as teacher_surname,person_id,c_class_name,class_desc,classes.crn from classes 
        inner join people on 
        classes.c_teacher_id = people.person_id
        inner join topics on
        classes.c_class_name = topics.class_name
        where classes.crn = {};
        '''.format(crn))
        
        info = cur.fetchone()
        
        cur.execute(
        '''
        select student_id,grade from grades
        inner join people on 
        grades.student_id = people.person_id
        where grades.crn = {};
        '''.format(crn))

        grades = cur.fetchall()
        
        cur.execute(
        '''
        select person_id,pname,psurname from classes 
        inner join enrollment on 
        classes.crn = enrollment.crn
        inner join topics on
        classes.c_class_name = topics.class_name
        inner join people on 
        people.person_id = enrollment.student_id
        where classes.crn = {};
        '''.format(crn))

        students = cur.fetchall()
                
        return {"info": info,"students":students,"grades": grades,"class_average":get_avg_grade(grades)}
    
@app.route('/')
def index():
    cur = mysql.connection.cursor()

    cur.execute('''
        SELECT * FROM PEOPLE
    ''')

    results = cur.fetchall()
    resultarr=[]
    for i in results:
        resultarr.append(i['pname'] + ' ' + i['psurname'])
    print(resultarr)
    return str(resultarr)

if __name__ == '__main__':
    app.run(debug=True, port=1999)