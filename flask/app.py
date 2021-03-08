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

@app.route("/create_tables") #uwu
def create_tables():
    cur = mysql.connection.cursor()
    
    cur.execute('''CREATE TABLE IF NOT EXISTS people (
    person_id INT AUTO_INCREMENT PRIMARY KEY,
    pname VARCHAR(255) NOT NULL,
    psurname VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );''')    
    
    cur.execute('''CREATE TABLE IF NOT EXISTS topics (
    class_name CHAR(6) PRIMARY KEY,
    class_desc VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );''')    
    
    cur.execute('''CREATE TABLE IF NOT EXISTS classes (
    crn INT AUTO_INCREMENT PRIMARY KEY,
    c_teacher_id INT NOT NULL,
    c_class_name CHAR(6) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(c_teacher_id)
    REFERENCES people2 (person_id),
    FOREIGN KEY(c_class_name)
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
                INSERT INTO topics (class_name,class_desc)
                VALUES ('{}','{}'); 
            ''' ,
    "class": '''
                INSERT INTO classes (c_class_name,c_teacher_id)
                VALUES ('{}','{}'); 
            ''' ,
}

@app.route('/add_<entry>',methods = ["POST"])
def add_to_db(entry):
    if request.method == "POST" and entry in ["user","class","topic"]:
        cur = mysql.connection.cursor()
        cur.execute(add_to_db_querries[entry].format(*request.json.values()))
        mysql.connection.commit()
        return add_to_db_querries[entry].format(*request.json.values())+"added "+entry

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