import React,{useState,useEffect} from 'react';
import './myclasses.styles.scss';
import Select from 'react-select'
import { TextField } from '@material-ui/core';
import axios from '../../axios';
import Class from '../class/class.component';


const MyClasses = () => {

    const [ongoingClasses,setOngoingClasses] = useState()
    const [gradedClasses,setGradedClasses] = useState()

    useEffect(()=>{
        axios.get(`/student_info/${sessionStorage.getItem('id')}`,{headers:{id:sessionStorage.getItem('id'),token:sessionStorage.getItem('token')}})
        .then( res =>{
            console.log(res.data.ongoing_classes)
            console.log(res.data.grades)
            setOngoingClasses(res.data.ongoing_classes)
            setGradedClasses(res.data.grades)
        })
    },[]) ;

    const contains = crn => {
        gradedClasses.forEach((el) => {
            if (crn == el.crn){
                return false
            }
        })
        return false
    }
    
    return (
        
        <div className="myclasses">
            {ongoingClasses & gradedClasses ?  ongoingClasses.filter((clss) => contains(clss.crn)).map((e)=>{
                return <Class class_name={e.class_name} credits={e.credits} crn={e.crn}></Class>
            }): null}
            { gradedClasses ? gradedClasses.map((e)=>{
                return <Class class_name={e.class_name} credits={e.credits} crn={e.crn} grade={e.grade}/>
            }) :  null}

        </div>
    )
}


export default MyClasses;