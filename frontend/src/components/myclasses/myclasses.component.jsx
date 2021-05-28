import React,{useState,useEffect} from 'react';

import './myclasses.styles.scss';
import Select from 'react-select'
import { TextField } from '@material-ui/core';
import axios from '../../axios';


const MyClasses = () => {

    const [classes,setClasses] = useState()
    const [gradedClasses,setGradedClasses] = useState()

    useEffect(()=>{
        axios.get('/student_info/12').then( res =>{
            setClasses(res.data)
            // console.log(Object.values(res.data))
            console.log(res.data)
        })
    },[]) ;

    
    return (
        
        <div className="myclasses">
            
             myclasses
        </div>
    )
}


export default MyClasses;