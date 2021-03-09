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
    
    mysql.connection.commit()  
    return("success")

add_to_db_querries = {
    "user": '''
                INSERT INTO people (pname,psurname)
                VALUES ('{}','{}'); 
            ''' ,
    "topic": '''
                INSERT INTO topics (class_name,class_desc)
                VALUES ('{}','{}'); 
            ''' ,
    "class": '''
                INSERT INTO classes (c_class_name,c_teacher_id)
                VALUES ('{}','{}'); 
            ''' ,
    "enrollment": '''
                INSERT INTO enrollment (student_id , crn)
                VALUES ('{}','{}'); 
            ''' ,
}

@app.route('/add_<entry>',methods = ["POST"])
def add_to_db(entry):
    if request.method == "POST" and entry in add_to_db_querries:
        cur = mysql.connection.cursor()
        cur.execute(add_to_db_querries[entry].format(*request.json.values()))
        mysql.connection.commit()
        return "added "+entry
    
@app.route('/<crn>/students',methods = ["GET"])
def get_students(crn):
    if request.method == "GET":
        cur = mysql.connection.cursor()
        cur.execute(
        '''
        select person_id,pname,psurname,c_class_name from classes 
        inner join enrollment on 
        classes.crn = enrollment.crn
        inner join topics on
        classes.c_class_name = topics.class_name
        inner join people on 
        people.person_id = enrollment.student_id
        where classes.crn = {};
        '''.format(crn))
        return {"students":cur.fetchall()}
    
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