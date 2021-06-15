import React,{useState,useEffect} from "react";
import './gpamentor.styles.scss';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from '../../axios';


const GpaMentor = props => {
  
  const [fetchingMentor,setFetchingMentor] = useState()
  const [fetchingGrades,setFetchingGrades] = useState(true)
  const [gpa,set_gpa] = useState(4)
  const [credits,set_credits] = useState(0)
  const [classes,setClasses] = useState([])

  const [gpa_data,set_gpa_data] = useState({
	old_grades : [],
    new_grades :[],
    old_gpa : "",
    new_gpa : "",
    required_quality_credits : ""
  })

  useEffect(()=>{
	axios.get(`/student_info/${sessionStorage.getItem('id')}`,{headers:{id:sessionStorage.getItem('id'),token:sessionStorage.getItem('token')}})
	.then( res =>{
		setFetchingGrades(true)
		console.log(res.data)
		let arr=[]
		res.data.grades.forEach( item => {
			arr.push({name:item.class_name,grade:item.grade})
		})
		res.data.ongoing_classes.forEach( item => {
			arr.push({name:item.class_name,grade:""})
		});
		setClasses(arr)
	    setFetchingGrades(false)
	})
  },[]) ;


  const Fetch_mentor_info = () => {
		setFetchingMentor(true)
		axios.get(`/mentor/${sessionStorage.getItem('id')}/${credits}/${gpa}`,{headers:{id:sessionStorage.getItem('id'),token:sessionStorage.getItem('token')}})
			.then
			(
				(response) => {
					console.log(response.data)
					set_gpa_data(response.data);
					setFetchingMentor(false)
				}
			);
	}

  const stateChanger = (index,value) => {
	let newArr = [...classes]; 
    newArr[index].grade = value; 

    setClasses(newArr); 
  }

  return (
    <div className="gpamentor">
        WELCOME TO THE GPA MENTOR  <br/>
		 <TextField className="myTextField" onChange={ e => set_credits(e.target.value)} id="standard-basic" label=" Available credits" />
		 <TextField className="myTextField" onChange={ e => set_gpa(e.target.value)} id="standard-basic" label=" Desired gpa" />
		 <Button className="searchButton" variant="contained" onClick = {Fetch_mentor_info}> Enter </Button>

		{ fetchingMentor ? <div><CircularProgress/></div> :
		 <div>
			 <p> old gpa: {gpa_data.old_gpa} </p>
			<ul>
				{gpa_data.old_grades.map((grade) => <li> {grade.class_name}, grade = {grade.grade} </li>)}
			</ul>
			
			<p> new gpa: {gpa_data.new_gpa} </p>
			<ul>
				{gpa_data.new_grades.map((grade) => <li> {grade.class_name}, required grade = {grade.grade} </li>)}
			</ul>
		 </div>}

		{ fetchingGrades ? <div><CircularProgress/></div> : 

			<div>
				{classes.map( item =>
				  <div> {item.name} ==== 
					<input value={classes[classes.findIndex(x => x.name === item.name)].grade} onChange={(e)=>stateChanger(classes.findIndex(x => x.name === item.name),e.target.value)}/>
					{classes[classes.findIndex(x => x.name === item.name)].grade}
				  </div>)
				}
			</div>
		
		}
		 
    </div>
  );
};

export default GpaMentor;