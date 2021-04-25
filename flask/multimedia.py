from flask import Response
import cv2

def send_histogram(grades):
    img = cv2.imread("grade_template.png", 1)
    font = cv2.FONT_HERSHEY_PLAIN
    
    counts = list(grades.values())
    mode_grade_count = max(counts)
    
    for i in range(len(grades)):
        height = int(497-397*(counts[i]/mode_grade_count))
        cv2.rectangle(img,(i*85+80,497),(i*85+130,height),(0,200,150),-1)
        count_str = str(counts[i])
        cv2.putText(img,count_str,(i*85+80+(15 if len(count_str)==1 else 0),490),font,2,(0,0,0),3)
    
    data = cv2.imencode('.png', img)[1].tobytes()
    return Response(b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + data + b'\r\n\r\n', mimetype='multipart/x-mixed-replace; boundary=frame')