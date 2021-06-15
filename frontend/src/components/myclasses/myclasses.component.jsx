import React,{useState,useEffect} from 'react';
import './myclasses.styles.scss';
// import Select from 'react-select'
// import { TextField } from '@material-ui/core';
import axios from '../../axios';
import Class from '../class/class.component';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import CircularProgress from '@material-ui/core/CircularProgress';


const MyClasses = () => {

    
    const ongoingClasses =  [
        {field: "id", hide: true},
        {field: "class_name", headerName: "Code", width: 125},
        {field: "class_desc", headerName: "Title", width: 220},
        {field: "pname", headerName: "Instructor", width: 220},
        {field: "crn", headerName: "CRN", width: 140},
        {field: "credits", headerName: "Credits", width: 140},
        {field: "semester_season", headerName: "Semester Season", width: 190},
        {field: "semester_year", headerName: "Semester Year", width: 170}
        // {field: "remaining_capacity", headerName: "Rem.Capacity", width: 140},
        // {field: "majors", headerName: "Major Restriction", width: 160},
        // {field: "time", headerName: "Time", width: 160},
        // {field: "letters", headerName: "Letters", width: 160}
    ]
    const oldClasses =  [
        {field: "id", hide: true},
        {field: "class_name", headerName: "Code", width: 125},
        {field: "crn", headerName: "CRN", width: 140},
        {field: "credits", headerName: "Credits", width: 140},
        {field: "semester_season", headerName: "Semester Season", width: 190},
        {field: "semester_year", headerName: "Semester Year", width: 190},
        {field: "grade", headerName: "Grade", width: 170}
    ]

    const [info,setInfo] = useState({columns:ongoingClasses,rows:[]})
    const [oldInfo,setOldInfo] = useState({columns:oldClasses,rows:[]})
    const [fetching,setFetching] = useState(true)
    
    useEffect(()=>{
        axios.get(`/student_info/${sessionStorage.getItem('id')}`,{headers:{id:sessionStorage.getItem('id'),token:sessionStorage.getItem('token')}})
        .then( res =>{
            res.data.ongoing_classes.forEach((item, i) => {
                item['id'] = i + 1;
            });
            res.data.grades.forEach((item, i) => {
                item['id'] = i + 1;
            });
            console.log(res.data)
            setInfo({...info,rows:res.data.ongoing_classes})
            setOldInfo({...oldInfo,rows:res.data.grades})
            setFetching(false)
        })
    },[]) ;


    return (
        
        <div className="myClasses">
            
            {fetching ? <CircularProgress className="myClassesCirc" size="8rem"/>:
            <div>
                <h1>Ongoing Classes</h1>
                <div style={{ height: 700, width: '100%',padding:30 }}>
                <DataGrid
                    {...info}
                    components={{
                    Toolbar: GridToolbar,
                    }}
                />
                </div>

                <h1>Old Classes</h1>
                <div style={{ height: 700, width: '100%',padding:30 }}>
                <DataGrid
                    {...oldInfo}
                    components={{
                    Toolbar: GridToolbar,
                    }}
                />
                </div>
            </div>}
        </div>

        // <div className="myclasses">
        //     <h1> Old Classes </h1> <br/>

        //     {studentData.grades.sort((f,s)=>(f.created_at > s.created_at ? 1:-1)) //Sort classes to display them in chronological order
		// 	.map((e)=>{
        //         return <Class key={e.crn} class_name={e.class_name} class_desc={e.class_desc} credits={e.credits} crn={e.crn} grade={e.grade} semester = {e.semester_season + e.semester_year}/>
        //     })}
		// 	<br/>
		// 	<p> GPA: {studentData.GPA} </p>
		// 	<p> credits: {studentData.grades.map((grade) => (grade.credits)).reduce((f, s) => f + s, 0)} </p>

		// 	<br/> <h1>Ongoing classes</h1> <br/>

        //     {studentData.ongoing_classes.map((e)=>{
        //         return <Class key={e.crn} class_name={e.class_name} class_desc={e.class_desc} credits={e.credits} crn={e.crn} semester = {e.semester_season + e.semester_year}></Class>
        //     })}

        // </div>
    )
}


export default MyClasses;