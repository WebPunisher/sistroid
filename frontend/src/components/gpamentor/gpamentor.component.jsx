import React,{useState,useEffect} from "react";
import './gpamentor.styles.scss';

import axios from '../../axios';


const GpaMentor = props => {
  
  const [init,setInit] = useState()

  useEffect(() => {
    axios.get('/student_info/14',{headers:{id:14,token:sessionStorage.getItem('token')}})
    .then((response) => {
      console.log(response.data);
    }, (error) => {
      console.log(error);
    });
},[])
  return (
    <div className="gpamentor">
        WELCOME TO THE GPA MENTOR 

    </div>
  );
};

export default GpaMentor;