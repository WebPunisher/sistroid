from app import mysql,crn_info
from multimedia import send_histogram

def get_crn_histogram(crn):
    info = crn_info(crn)    
    grades={"AA":0,"BA":0,"BB":0,"CB":0,"CC":0,"DC":0,"DD":0,"FF":0}
    for grade in info["grades"]:
        grades[grade["grade"]]+=1
        
    return send_histogram(grades)
    
def get_class_histogram(class_name):
    cur = mysql.connection.cursor()     
    
    cur.execute("""
    select grade,count(*) from grades,classes,topics 
    where
    
    topics.class_name = classes.c_class_name and
    grades.crn = classes.crn and
    topics.class_name = %s
    
    group by grade;
    """,(class_name,))
    
    grades={"AA":0,"BA":0,"BB":0,"CB":0,"CC":0,"DC":0,"DD":0,"FF":0}
    data = cur.fetchall()
    for row in data:
        grades[row["grade"]] = row["count(*)"]
        
    return send_histogram(grades)
    
def get_teacher_histogram(person_id):
    cur = mysql.connection.cursor()     
    
    cur.execute("""
    select grade,count(*) from grades,classes,people
    where
    classes.c_teacher_id = people.person_id and
    grades.crn = classes.crn and
    people.person_id = %s 
    group by grade;
    """,(person_id,))
    
    grades={"AA":0,"BA":0,"BB":0,"CB":0,"CC":0,"DC":0,"DD":0,"FF":0}
    data = cur.fetchall()
    for row in data:
        grades[row["grade"]] = row["count(*)"]
        
    return send_histogram(grades)

def get_teacher_class_histogram(person_id,class_id):
    cur = mysql.connection.cursor()     
    
    cur.execute("""
    select grade,count(*) from grades,classes,people,topics
    where
    topics.class_name = classes.c_class_name and
    classes.c_teacher_id = people.person_id and
    grades.crn = classes.crn and
    people.person_id = %s and
    topics.class_name =  %s
    group by grade;
    """,(person_id,class_id))
    
    grades={"AA":0,"BA":0,"BB":0,"CB":0,"CC":0,"DC":0,"DD":0,"FF":0}
    data = cur.fetchall()
    for row in data:
        grades[row["grade"]] = row["count(*)"]
        
    return send_histogram(grades)