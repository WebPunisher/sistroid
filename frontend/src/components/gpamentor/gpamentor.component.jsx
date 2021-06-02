import React,{useState,useEffect} from "react";
import './gpamentor.styles.scss';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import axios from '../../axios';


const GpaMentor = props => {
  
  const [init,setInit] = useState()
  const [gpa,set_gpa] = useState(4)
  const [credits,set_credits] = useState(0)

  const [gpa_data,set_gpa_data] = useState({
	old_grades : [],
    new_grades :[],
    old_gpa : "",
    new_gpa : "",
    required_quality_credits : ""
  })

  const Fetch_mentor_info = () => {
		axios.get(`/mentor/${sessionStorage.getItem('id')}/${credits}/${gpa}`,{headers:{id:sessionStorage.getItem('id'),token:sessionStorage.getItem('token')}})
			.then
			(
				(response) => {
					set_gpa_data(response.data);
				}
			);
	}

  return (
    <div className="gpamentor">
        WELCOME TO THE GPA MENTOR  <br/>
		 <TextField className="myTextField" onChange={ e => set_credits(e.target.value)} id="standard-basic" label=" Avaliable credits" />
		 <TextField className="myTextField" onChange={ e => set_gpa(e.target.value)} id="standard-basic" label=" Desired gpa" />
		 <Button className="searchButton" variant="contained" onClick = {Fetch_mentor_info}> Enter </Button>

		 <p> old gpa: {gpa_data.old_gpa} </p>
		 <ul>
			  {gpa_data.old_grades.map((grade) => <li> {grade.class_name}, grade = {grade.grade} </li>)}
		</ul>
		 
		 <p> new gpa: {gpa_data.new_gpa} </p>
		 <ul>
			  {gpa_data.new_grades.map((grade) => <li> {grade.class_name}, required grade = {grade.grade} </li>)}
		</ul>
    </div>
  );
};

export default GpaMentor;