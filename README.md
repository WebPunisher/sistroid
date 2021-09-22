# sistroid

  ● Description
Sistroid is a student information systems web application written in
Javascript-React for the frontend and Python-Flask for the backend with MySQL as
database. It is built to provide a smooth user experience to the students with a
modern user interface. The project source code is maintained in GitHub as an open
source project. Related github link is https://github.com/WebPunisher/sistroid

  ● Installation Instructions
Clone down the repository using the link given above with the .git extension. Make
sure to have node and npm installed on your machine to run the project properly.
After cloning, change to the frontend directory and follow the steps given below to
start the frontend server on localhost at port 3000.

    ● yarn install  => to install dependency packages
    ● yarn run      => to run the frontend server
    
After that, change to the flask directory to start the backend server. Note that the
backend server runs on port 1999 as default.

    ● python app.py => to run the backend server
    
For the application to run properly, you need to have MySQL installed with
necessary user configuration which is specified in the app.py file. To experience
the demo with example data, you have to make a call to /reset api endpoint. You
can do that via entering http://127.0.0.1:1999/reset to the URL bar on your
browser.

  ● Backend API ( Application Programming Interface )
  
  /create_tables = Creates all the database tables . Used for development
purpose and initialization.
  /clear_tables = Removes all the tables from database. Used for
development purposes
  /seed = Randomly seeds the database with the data taken from
seeddata.json file . Used to generate example data for the database.10
  /gpa_calculator = Calculates the gpa taking the classes and the grades as
input. Returns the calculated gpa.
  /ranking/<major> = Queries the database to get the ranking of the students
from the specified major in terms of GPA. Returns the ranking that includes the
name and the gpa of the students.
  /student_info/<student_id> = Queries the database to get personal
information, classes , gpa, and grades of the student specified with the student id.
  /available_classes = Queries the database to fetch the classes that are
available for the current semester. Returns the classes list that include
information such as credits, time, crn, teacher_name, letters, and major
restrictions for each class.
  /crn_info/<crn> = Fetches and returns the general information, students
enrolled, grades, and class average information for the class with the specified
crn.
  /mentor/<student_num>/<available_credits>/<desired_gpa> = Takes the
current situation of the student as input and makes calculations to check if the
student can reach desired gpa in the current status. Returns the solution if there is
one, returns a message if not.

  Histogram Endpoints

  /crn_histogram/<crn>
  /class_histogram/<class_name>
  /teacher_histogram/<person_id>
  /teacher_class_histogram/<person_id>/<class_id>
  
The four histogram endpoint given above fetches the related information from the
database with queries. Then uses multimedia functions importing the cv2 library
and generates a jpeg file with the given data. Generated jpeg file is returned to
the frontend to be displayed there.

  React Components
  ● add_drop
    ○ Shows ongoing classes and include available_classes
    ○ Takes the classes CRNs to drop or add as input and make the necessary API call to the backend server as a POST request
  ● available_classes
    ○ Fetches classes that are available for the current semester in a list format with filters and properties such as teacher name, crn, semester, etc.
  ● class
    ○ A component to display properties of a class, takes class_name, class_description, credits, teacher_name, crn, and semester as props.
  ● gpamentor
    ○ Fetches the gpa and the old classes of the student
    ○ Takes the desired gpa and available credits as input and provides a possible scenario to achieve desired gpa.
  ● histogram
    ○ Takes teacher_id, class_name, crn, or their combinations and displays the histogram related to the input. The histogram is created in the
    backend, the component just request it and display the response histogram.
  ● myclasses
    ○ Fetches old classes and ongoing classes of the student
    ○ Display the classes in a list format with filters in every property to make lookup faster and easier.
  ● profile
    ○ Fetches the student’s personal information, contact information, and image.
    ○ Displays the information in an editable format for contact information such as phone number, and non-editable format for general information such as major and age.
  ● ranking
    ○ Fetches the ranking of the students in terms of their GPA from all majors
    ○ Provides a filter for the major
