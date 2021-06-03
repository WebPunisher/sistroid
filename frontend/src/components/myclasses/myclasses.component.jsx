import React,{useState,useEffect} from 'react';
import './myclasses.styles.scss';
// import Select from 'react-select'
// import { TextField } from '@material-ui/core';
import axios from '../../axios';
import Class from '../class/class.component';


const MyClasses = () => {

    const [studentData,setStudentData] = useState({
        "classes": [],
        "ongoing_classes": [],
        "grades": [],
        "GPA" : "",
        "personal_information": ""
	})

    useEffect(()=>{
        axios.get(`/student_info/${sessionStorage.getItem('id')}`,{headers:{id:sessionStorage.getItem('id'),token:sessionStorage.getItem('token')}})
        .then( res =>{
            setStudentData(res.data)
        })
    },[]) ;

	/*
    const contains = crn => {
        studentData.grades.forEach((el) => {
            if (crn == el.crn){
                return false
            }
        })
        return false
    }*/
    
    return (
        
        <div className="myclasses"> <h1> Old Classes </h1> <br/>

            {studentData.grades.sort((f,s)=>(f.created_at > s.created_at ? 1:-1)) //Sort classes to display them in chronological order
			.map((e)=>{
                return <Class class_name={e.class_name} credits={e.credits} crn={e.crn} grade={e.grade} semester = {e.semester_season + e.semester_year}/>
            })}

			<br/> <h1>Ongoing classes</h1> <br/>

            {studentData.ongoing_classes.map((e)=>{
                return <Class key={e.crn} class_name={e.class_name} credits={e.credits} crn={e.crn} semester = {e.semester_season + e.semester_year}></Class>
            })}

        </div>
    )
}


export default MyClasses;