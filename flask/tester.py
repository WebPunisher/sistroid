#! /usr/bin/python3.7
import requests

def fail(code):
    print("FAILED: ",code)
    exit()

def test_student_auth():
    r = requests.post(url="http://localhost:1999/login",json={"number":14,"password":"password"})
    if not (r.status_code == 200 and r.json()["correct"]): fail("login fail")
    token = r.json()["token"]
    
    r = requests.get(url="http://localhost:1999/student_info/14", headers={"id":"14","token":token})    
    if not r.status_code == 200: fail("correct token fail")

    crn_to_drop = r.json()["ongoing_classes"][0]["crn"]
    
    r = requests.delete(url="http://localhost:1999/student_remove_enrollment/14/"+str(crn_to_drop), headers={"id":"14","token":token})    
    if not r.status_code == 200: fail("student cant drop own classes")
    
    r = requests.get(url="http://localhost:1999/student_info/15", headers={"id":"14","token":token})    
    if not r.status_code == 401: fail("Authenticated unauthorized student")
    r = requests.get(url="http://localhost:1999/student_info/14", headers={"id":"14","token":"token"})    
    if not r.status_code == 401: fail("wrong token returned results")

    print("student authorization test passed")

def test_teacher_auth():
    r = requests.post(url="http://localhost:1999/login",json={"number":1,"password":"password"})
    if not (r.status_code == 200 and r.json()["correct"]): fail("login fail")
    token = r.json()["token"]
    r = requests.get(url="http://localhost:1999/student_info/14", headers={"id":"1","token":token})    
    if not r.status_code == 200: fail("can't read student data as teacher")
    r = requests.get(url="http://localhost:1999/student_info/14", headers={"id":"1","token":"token"})    
    if not r.status_code == 401: fail("wrong token returned results")

    print("teacher authorization test passed")

r = requests.get(url="http://localhost:1999/reset") #reset database
test_student_auth()
test_teacher_auth()
