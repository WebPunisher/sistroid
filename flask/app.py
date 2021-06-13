from flask import Flask,request,jsonify,Response
from flask_cors import cross_origin
from flask_mysqldb import MySQL
import json
import random
import histogram
from copy import deepcopy
from datetime import datetime as dt
from hashlib import sha256
try:
    from Crypto.Random import get_random_bytes
except:
    from crypto import Random
    get_random_bytes = Random.get_random_bytes
import sys

app = Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'sarptalha'
app.config['MYSQL_DB'] = 'itusis'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)
sessions = {}

#abort with cors
def abort(code):
    print("aborting",file=sys.stderr)
    response = jsonify(status = code)
    return response,code

@app.route("/create_tables")
@cross_origin()
def create_tables():
    cur = mysql.connection.cursor()
    
    cur.execute('''CREATE TABLE IF NOT EXISTS people (
    person_id INT AUTO_INCREMENT PRIMARY KEY,
    pname VARCHAR(50) NOT NULL,
    psurname VARCHAR(50) NOT NULL,
    mail VARCHAR(255) ,
    major VARCHAR(3) ,
    photo_url VARCHAR(255) ,
    password VARCHAR(64) ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );''')    
    
    cur.execute('''CREATE TABLE IF NOT EXISTS topics (
    class_name VARCHAR(6) PRIMARY KEY,
    class_desc VARCHAR(255),
    credits INT NOT NULL,
    major VARCHAR(3) ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );''')    
    
    cur.execute('''CREATE TABLE IF NOT EXISTS topic_letters (
    class_name VARCHAR(6),
    letter VARCHAR(3),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (class_name,letter),
    foreign key (class_name)
    references topics(class_name)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    );''')    
    
    cur.execute('''CREATE TABLE IF NOT EXISTS topic_restrictions (
    class_name VARCHAR(6),
    major VARCHAR(3),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (class_name,major),
    foreign key (class_name)
    references topics(class_name)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    );''')    
    
    cur.execute('''CREATE TABLE IF NOT EXISTS classes (
    crn INT AUTO_INCREMENT PRIMARY KEY,
    c_teacher_id INT NOT NULL,
    c_class_name VARCHAR(6) NOT NULL,
    capacity INT DEFAULT 0,
    time varchar(255) DEFAULT 'TBA',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY(c_teacher_id)
    REFERENCES people (person_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY(c_class_name)
    REFERENCES topics (class_name)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    );''')   

    cur.execute('''CREATE TABLE IF NOT EXISTS enrollment (
    student_id INT NOT NULL,
    crn INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (student_id,crn),
    FOREIGN KEY(student_id)
    REFERENCES people (person_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY(crn)
    REFERENCES classes (crn)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    );''')   

    cur.execute('''CREATE TABLE IF NOT EXISTS grades (
    student_id INT NOT NULL,
    crn INT NOT NULL,
    grade VARCHAR(2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (student_id,crn),
    FOREIGN KEY(student_id)
    REFERENCES people (person_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY(crn)
    REFERENCES classes (crn)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    );''')       
       
    cur.execute(
    '''
    create or replace view teachers AS
    SELECT distinct people.person_id, people.pname, people.psurname, people.mail, people.created_at, people.photo_url
    FROM people,classes
    WHERE classes.c_teacher_id = people.person_id;
    ''')
    
    cur.execute(
     '''
    create or replace view students AS
    SELECT distinct people.person_id, people.pname, people.psurname,people.mail, people.major, people.created_at, people.photo_url
    FROM 
    people left outer join classes
    on
    classes.c_teacher_id = people.person_id
    where crn is null;
    '''
    )    
       
    cur.execute('''CREATE TABLE IF NOT EXISTS semesters (
    semester_year INT NOT NULL,
    semester_season varchar(10) NOT NULL,
    end_date TIMESTAMP,
    start_date TIMESTAMP,
    
    PRIMARY KEY (semester_year,semester_season));
    '''
    )           
    
    mysql.connection.commit()  
    return("success")


add_to_db_querries = {
    "user": '''
                INSERT INTO people (pname,psurname,major,mail,photo_url)
                VALUES (%s,%s,%s,%s,%s); 
            ''' ,
    "topic": '''
                INSERT INTO topics (class_name,class_desc,credits)
                VALUES (%s,%s,%s); 
            ''' ,
    "topic_letter": '''
                INSERT INTO topic_letters (class_name,letter)
                VALUES (%s,%s); 
            ''' ,
    "topic_restriction": '''
                INSERT INTO topic_restrictions (class_name,major)
                VALUES (%s,%s); 
            ''' ,
    "class": '''
                INSERT INTO classes (c_class_name,c_teacher_id,capacity,time)
                VALUES (%s,%s,%s,%s); 
            ''' ,
    "enrollment": '''
                INSERT INTO enrollment (student_id , crn)
                VALUES (%s,%s); 
            ''' ,
    "grade": '''
                INSERT INTO grades (student_id , grade, crn)
                VALUES (%s,%s,%s); 
            ''' ,
    "semester": '''
                INSERT INTO semesters (semester_year , semester_season, end_date, start_date)
                VALUES (%s,%s,%s,%s); 
            ''' ,
}

delete_from_db_querries = {
    "user" : "DELETE FROM people WHERE person_id = %s",
    "topic" : "DELETE FROM topics WHERE class_name = %s",
    "class" : "DELETE FROM people WHERE crn = %s",
    "grades" : "DELETE FROM grades WHERE student_id = %s and crn = %s",
    "enrollment" : "DELETE FROM enrollment WHERE student_id = %s and crn = %s",
    }

@app.route('/register', methods = ["POST"])
@cross_origin()
def register():
    cur = mysql.connection.cursor()
    
    password = sha256(request.json["password"].encode()).hexdigest()
    name = request.json["name"]
    surname = request.json["surname"]
    mail = request.json["mail"]
    photo_url = request.json["photo_url"]
    major = request.json["major"]
    
    cur.execute(add_to_db_querries["user"],(name,surname,major,mail,photo_url))
    cur.execute("update people set password = %s where person_id = (SELECT LAST_INSERT_ID());", (password,))
    cur.execute("SELECT LAST_INSERT_ID() as id;")
    
    session_key = str(get_random_bytes(32))
    id_num = cur.fetchone()["id"]
    sessions[id_num] = session_key
    mysql.connection.commit()  
    
    response = jsonify({"token":session_key,"id":id_num})    
    return response
    
def authenticate(req,subject_id = 0xffffffff):
    try:
        number = int(req.headers["Id"])
        token = req.headers["Token"]
    
        cur = mysql.connection.cursor()
        cur.execute("select * from students where person_id = %s",(number,))
        
        user = cur.fetchone()
        print(number, subject_id, number == int(subject_id) ,sessions[number] == token,'\n',sessions[number] , token, file=sys.stderr)
        if user:
            return subject_id != "super" and number == int(subject_id) and sessions[number] == token
        else:
            cur.execute("select * from teachers where person_id = %s",(number,))
            user = cur.fetchone()
            return user and sessions[number] == token
        
    except:
        return False

@app.route('/login', methods = ["POST"])
@cross_origin()
def login():
    cur = mysql.connection.cursor()
    number = int(request.json["number"])
    password = request.json["password"]
    
    cur.execute("select password from people where person_id = %s",(number,))
    true_password = cur.fetchone()["password"]
    
    if (sha256(password.encode()).hexdigest() == true_password):
        session_key = get_random_bytes(32).hex()
        sessions[number] = session_key
        response = jsonify({"token":session_key,"correct":True})
    else:
        response = jsonify({"token":"no password","correct":False})
    return response
    

@app.route('/add_<entry>',methods = ["POST"])
@cross_origin()
def add_to_db(entry):
    
    if not authenticate(request) and entry != "enrollment": return abort(403) #students can modify enrollments
    if not authenticate(request,request.json["id"]): return abort(403) #rest can only be modified by teachers

    cur = mysql.connection.cursor()    
    if entry == "enrollment":
        cur.execute("""
        select * from classes,semesters
        where
        (classes.created_at between end_date and start_date) and
        (current_timestamp() between end_date and start_date) and
        crn = %s;
        """,(request.json["crn"],))
        if not cur.fetchone(): return abort(403) #check semester of the class
    
    if entry in add_to_db_querries:
        cur.execute(add_to_db_querries[entry],tuple(request.json.values()))
        mysql.connection.commit()
        return "added entry"

@app.route('/remove_<entry>/<id_num>',methods = ["DELETE"])
@cross_origin()
def remove_from_db(entry,id_num):
    if not authenticate(request): return abort(403)
    if request.method == "DELETE" and entry in ["user","topic","class"]:
        cur = mysql.connection.cursor()
        cur.execute(delete_from_db_querries[entry],(id_num))
        mysql.connection.commit()
        return "removed entry"

@app.route('/student_remove_<entry>/<id_num>/<crn>',methods = ["DELETE"])
@cross_origin()
def remove_from_db_two_args(entry,id_num,crn):
    
    if not authenticate(request) and entry == "grades": return abort(403) #only teachers can modify grades
    if (
        not authenticate(request,id_num) or
        int(crn) not in [i["crn"] for i in get_student_ongoing(id_num)]
    ): return abort(403) #students can modify enrollments but only theirs
    
    if request.method == "DELETE" and entry in ["grades","enrollment"]:
        cur = mysql.connection.cursor()
        cur.execute(delete_from_db_querries[entry],(id_num,crn))
        mysql.connection.commit()
        return "removed entry"

@app.route("/clear_all_tables")
@cross_origin()
def clear_all_tables():
    cur = mysql.connection.cursor()
    cur.execute( '''
            SET FOREIGN_KEY_CHECKS = 0;
            drop table topic_restrictions;
            drop table topic_letters;
            drop table people;
            drop table topics;
            drop table classes;
            drop table enrollment;
            drop table grades;
            drop table semesters;
            SET FOREIGN_KEY_CHECKS = 1;
              ''')
    # mysql.connection.commit()
    return ("successfully cleared all the tables")

@app.route("/deneme")
@cross_origin()
def deneme():
    
    with open('./seeddata.json') as json_file:
        cur = mysql.connection.cursor()
        data = json.load(json_file)
        sample_majors = ["ISE","BLG","CHE"]
        
        cur.execute(add_to_db_querries["semester"],(2021,"spring","2021-01-28 20:53:41","2021-07-28 20:53:41"))
        cur.execute(add_to_db_querries["semester"],(2020,"spring","2020-01-28 20:53:41","2020-07-28 20:53:41"))
        
        for i in data['people']:
            mail_adress = (i.split(" ")[1]+i.split(" ")[0][:2]+str(dt.now().year%2000)+"@itu.edu.tr").lower()
            cur.execute('''
                INSERT INTO people (pname,psurname,major,mail,photo_url,password)
                VALUES (%s,%s,%s,%s,%s,'5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'); 
            ''',(i.split(" ")[0],i.split(" ")[1], sample_majors[random.randint(0,2)], mail_adress, "https://thispersondoesnotexist.com/image"))
        
        for i in data['topics']:
            random_topics=["Database Systems","Information Ethics","Computer Hardware","Software Engineering","IT Systems and Analysis","Operating Systems","Computer Networks","Introduction to Cloud","Web Programming","Backend Programming","Artificial Intelligence","Discrete Mathematics","Software Engineering Project","Distributed Systems Development","Information Systems Modelling"," Specification of Software Systems"," Software Evolution"," Software Quality"," Agile Methods","Data Integration and Analysis"]
            cur.execute(add_to_db_querries["topic"],(i,random.choice(random_topics),random.randint(2,4)))
            
            for letter in "asdfghjkl": #add random letters
                if random.randint(0,9) > 7:
                    cur.execute(add_to_db_querries["topic_letter"],(i,letter))
                    
            for major in sample_majors: #add random restrictions
                if random.randint(0,9) > 5:
                    cur.execute(add_to_db_querries["topic_restriction"],(i,major))
            
        
        for i in range(40):
            cur.execute(add_to_db_querries["class"],(data['topics'][i%30],i%9+1,30,
                                                     ['mon','tue','wen','sat'][random.randint(0,3)]+' '+str(random.randint(9,18))+':00'))
                
        cur.execute("update classes set created_at = '2020-05-30 20:26:38' where c_class_name < 'ISE300';")

        crn_dict = dict()
        for i in range(9,len(data["people"])):
            num = random.randint(1,31) 
            crn_dict[i] = [(num+v*3)%40+1 for v in range(13)]
            for j in crn_dict[i]:
                cur.execute(add_to_db_querries["enrollment"],(i,j))
    
        for enrol in crn_dict:
            for crn_num in crn_dict[enrol]:
                cur.execute(add_to_db_querries["grade"],(enrol,list(grade_translation.keys())[min(random.randint(3,7),random.randint(0,7))],crn_num))

        cur.execute("""
        delete grades from grades,classes 
        where grades.crn = classes.crn
        and classes.c_class_name > 'ISE300';
        """)
        
        for command in open("sarp_sql.sql","r").read().split(";")[:-1]:
            cur.execute(command)
        
        mysql.connection.commit()
        return ("success1")

grade_translation={"AA":4,"BA":3.5,"BB":3,"CB":2.5,"CC":2,"DC":1.5,"DD":1,"FF":0}
def get_avg_grade(grades, is_class=False):
    if not grades: return 0
    
    if is_class: 
        return sum([grade_translation[grade] for grade in [student["grade"] for student in grades]])/len(grades)
    
    quality_credits=0
    total_credits=0
    for entry in grades:
        quality_credits += grade_translation[entry["grade"]] * entry["credits"]
        total_credits += entry["credits"]
    return quality_credits/total_credits
    
    
@app.route('/ranking/<major>',methods = ["GET"])
@cross_origin()
def get_ranking(major):
    cur = mysql.connection.cursor()

    if major == "all": cur.execute("select * from students")    
    else: cur.execute("select * from students where major = %s",tuple([major]))
    
    people = cur.fetchall()
    GPA_LIST=[]
    for person in people:
        person_name = person["pname"] + " " + person["psurname"]
        person_gpa = get_avg_grade(get_student_grades(person["person_id"]))
        GPA_LIST.append((person_name,person_gpa))
        
    GPA_LIST.sort(key = lambda x: x[1],reverse=True)
    response = jsonify({i:GPA_LIST[i-1] for i in range(1,len(GPA_LIST)+1)})
    return response
    
@app.route('/student_info/<student_id>',methods = ["GET"])
@cross_origin()
def student_info(student_id):
    if not authenticate(request,student_id): return abort(401)
    
    grades = get_student_grades(student_id)
    response = jsonify({
        "classes": get_student_classes(student_id),
        "ongoing_classes": get_student_ongoing(student_id),
        "grades": grades,
        "GPA" : get_avg_grade(grades),
        "personal_information": get_student_info(student_id)})
   
    return response    

@app.route('/available_classes',methods = ["GET"])
@cross_origin()
def available_classes():
    cur = mysql.connection.cursor()   
    
    cur.execute(
    '''
    select 
    classes.crn,
    class_name,
    class_desc,
    topics.credits,
    concat (teachers.pname,' ',teachers.psurname) as pname,
    classes.capacity - count(*) as remaining_capacity,
    classes.time,
    
    (select Group_CONCAT(letter) from topic_letters
    where topic_letters.class_name = classes.c_class_name) as letters,
    (select Group_CONCAT(major) from topic_restrictions
    where topic_restrictions.class_name = classes.c_class_name) as majors
    
    from classes 
    inner join topics on
    classes.c_class_name = topics.class_name
    inner join semesters on 
    (classes.created_at between end_date and start_date) and
    (current_timestamp() between end_date and start_date)
    inner join teachers on 
    teachers.person_id = classes.c_teacher_id
    inner join enrollment on 
    enrollment.crn = classes.crn
    group by enrollment.crn;
    ''')
    
    available = cur.fetchall()
    return jsonify(available)

def get_student_ongoing(student_id):
    cur = mysql.connection.cursor()   
    
    cur.execute(
    '''
    select classes.crn,class_name,concat (teachers.pname,' ',teachers.psurname) as pname,class_desc,semester_season,semester_year,topics.credits from classes 
    inner join enrollment on 
    classes.crn = enrollment.crn
    inner join topics on
    classes.c_class_name = topics.class_name
    inner join students on 
    students.person_id = enrollment.student_id
    inner join teachers on 
    teachers.person_id = classes.c_teacher_id
    inner join semesters on 
    (classes.created_at between end_date and start_date) and
    (current_timestamp() between end_date and start_date)
    where students.person_id = %s;
    ''',(student_id,))
    
    ongoing_classes = cur.fetchall()
    return ongoing_classes
    
def get_student_classes(student_id):
    cur = mysql.connection.cursor()   
    cur.execute(
    '''
    select classes.crn,c_class_name,semester_season,semester_year from classes 
    inner join enrollment on 
    classes.crn = enrollment.crn
    inner join topics on
    classes.c_class_name = topics.class_name
    inner join students on 
    students.person_id = enrollment.student_id
    inner join semesters on 
    classes.created_at between end_date and start_date
    where students.person_id = %s;
    ''',(student_id,))
    
    classes = cur.fetchall()
    return classes
    
def get_student_grades(student_id):
    cur = mysql.connection.cursor()   
    cur.execute(
    '''
    select grades.crn,topics.class_name,grade,topics.credits,semester_season,semester_year from students
    inner join grades on 
    grades.student_id = students.person_id
    inner join enrollment on 
    grades.crn = enrollment.crn and students.person_id = enrollment.student_id
    inner join classes on 
    enrollment.crn = classes.crn
    inner join topics on 
    topics.class_name = classes.c_class_name
    inner join semesters on 
    classes.created_at between end_date and start_date
    where students.person_id = %s;
    ''',(student_id,))

    grades = cur.fetchall()
    return grades
    
def get_student_info(student_id):
    cur = mysql.connection.cursor()   
    cur.execute(
    '''
    select pname,psurname,mail,major,photo_url from students where person_id = %s
    ''',(student_id,))       
    
    info= cur.fetchone()
    return info
        
@app.route('/crn_info/<crn>',methods = ["GET"])
@cross_origin()
def get_crn_info(crn):
    response= jsonify(crn_info(crn))
    #response.headers.add("Access-Control-Allow-Origin", "*")
    return response    
    
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
        where classes.crn = %s;
        ''',(crn,))
        
        info = cur.fetchone()
        
        cur.execute(
        '''
        select student_id,grade from grades
        inner join people on 
        grades.student_id = people.person_id
        where grades.crn = %s;
        ''',(crn,))

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
        where classes.crn = %s;
        ''',(crn,))

        students = cur.fetchall()
        return {"info": info,"students":students,"grades": grades,"class_average":get_avg_grade(grades, is_class=True)}
  

def grade_search(quality_c, available_c, classes, class_index = 0):
    if quality_c <= 0:
        return classes,quality_c
    if class_index >= len(classes) or available_c <= 0:
        return None,0
    if available_c < classes[class_index]["credits"]:
        return grade_search(quality_c, available_c,classes,class_index+1) #search next one
    
    for grade in list(grade_translation.keys())[::-1]:
        if grade >= classes[class_index]["grade"]: continue #if not greater than original continue
        
        
        old_grade = classes[class_index]["grade"]
        classes[class_index]["grade"] = grade
        quality_gain = (grade_translation[grade]-grade_translation[old_grade]) * classes[class_index]["credits"] * 0.25
        
        result,q_c = grade_search(quality_c-quality_gain, available_c-classes[class_index]["credits"],classes,class_index+1)
        if result:
            return result,q_c
        
        classes[class_index]["grade"] = old_grade
        
    return None,0
  
@app.route('/mentor/<student_num>/<available_credits>/<desired_gpa>')
@cross_origin()
def gpa_mentor(student_num,available_credits,desired_gpa):
    if not authenticate(request,student_num): return abort(401)
    
    available_credits = int(available_credits)
    desired_gpa = float(desired_gpa)
    
    #get the student data for current classes
    current = list(get_student_ongoing(student_num))   
    for cls in current:
        cls["grade"] = "FF" #presume FF to be base grade since these ones arenot graded yet
    available_credits += sum([i["credits"] for i in current])    
    
    #data procurement
    grades = get_student_grades(student_num)
    gpa = get_avg_grade(grades)
    
    credits = [grade["credits"] for grade in grades]
    total_credits = sum(credits)
    
    #required quality credit calculation
    quality_credits = total_credits * gpa * 0.25
    desired_quality_credits = (total_credits+available_credits) * desired_gpa * 0.25
    required_quality_credits = desired_quality_credits - quality_credits
    
    #check improveable classes (only matters if available credits > 0)
    improveable = [grade for grade in grades if grade["grade"] > "CB"]
    improveable.sort(key = lambda x: x["grade"], reverse=True)
    improveable = improveable[:4] #take 4 lowest grades below CC
    
    
    new_grades,q_c = grade_search(required_quality_credits,available_credits,deepcopy(current+improveable))
    new_gpa = ((quality_credits+required_quality_credits-q_c)/(total_credits+available_credits))*4
    
    if new_gpa >= desired_gpa and new_grades:
        changed_grades = []
        for grade in new_grades:
            if not grade in grades:
                changed_grades.append(grade)
        
        response = {"old_grades" : grades,
                    "new_grades" : changed_grades,
                    "old_gpa" : gpa,
                    "new_gpa" : new_gpa,
                    "required quality credits" : required_quality_credits}
    else:
        response = {"old_grades" : grades,
                    "new_grades" : [],
                    "old_gpa" : gpa,
                    "new_gpa" : "4.0 (in your dreams)",
                    "required_quality_credits" : "infinite lmao"}        
    
    response= jsonify(response)
    return response
  
@app.route('/reset')
@cross_origin()
def reset_db():
    create_tables()
    clear_all_tables()
    create_tables()
    deneme()
    return ("reseted database")
    
@app.route('/crn_histogram/<crn>',methods = ["GET"])
@cross_origin()
def crn_histogram(crn): 
    return histogram.get_crn_histogram(crn)

@app.route('/class_histogram/<class_name>',methods = ["GET"])
@cross_origin()
def class_histogram(class_name):
    return histogram.get_class_histogram(class_name)

@app.route('/teacher_histogram/<person_id>',methods = ["GET"]) 
@cross_origin()
def teacher_histogram(person_id): 
    return histogram.get_teacher_histogram(person_id)

@app.route('/teacher_class_histogram/<person_id>/<class_id>',methods = ["GET"])
@cross_origin()
def teacher_class_histogram(person_id,class_id):
    return histogram.get_teacher_class_histogram(person_id,class_id)

@app.route('/')
@cross_origin()
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
