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
    
    cur.execute('''CREATE TABLE IF NOT EXISTS people2 (
    person_id INT AUTO_INCREMENT PRIMARY KEY,
    pname VARCHAR(255) NOT NULL,
    psurname VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );''')    
    
    cur.execute('''CREATE TABLE IF NOT EXISTS topics (
    class_id INT AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(255) NOT NULL,
    class_desc VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );''')    
    
    cur.execute('''CREATE TABLE IF NOT EXISTS classes (
    crn INT AUTO_INCREMENT PRIMARY KEY,
    c_teacher_id INT NOT NULL,
    c_class_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(c_teacher_id)
    REFERENCES people2 (person_id),
    FOREIGN KEY(c_class_id)
    REFERENCES topics (class_id)
    );''')   
    
    mysql.connection.commit()  
    return("success")

@app.route('/add_user',methods = ["POST"])
def add_user():
    if request.method == "POST":
        data = request.json
        
        cur = mysql.connection.cursor()
        cur.execute('''
            INSERT INTO people2 (pname,psurname)
            VALUES ('{}','{}'); 
        '''.format(data["pname"],data["psurname"]))
        mysql.connection.commit()        
        
        return "added user"

@app.route('/')
def index():
    cur = mysql.connection.cursor()

    cur.execute('''
        SELECT * FROM PEOPLE2
    ''')

    results = cur.fetchall()
    resultarr=[]
    for i in results:
        resultarr.append(i['pname'] + ' ' + i['psurname'])
    print(resultarr)
    return str(resultarr)

if __name__ == '__main__':
    app.run(debug=True, port=1999)