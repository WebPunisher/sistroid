import React , { useState,useEffect } from "react";
import './adddrop.styles.scss';

import axios from '../../axios';
import Class from '../class/class.component';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';



const AddDrop = props => {

  const [addList,setAddList] = useState(['s','k','l'])
  const [dropList,setDropList] = useState(['','',''])
  const [ongoingClasses,setOngoingClasses] = useState()

  useEffect(()=>{
    axios.get('/student_info/12').then( res =>{
      console.log(res.data.ongoing_classes)
        setOngoingClasses(res.data.ongoing_classes)
    })
  },[]) ;

  const increase = ( type ) => {
    if (type === "add"){
      setAddList([...addList,''])
    } else {
      setDropList([...dropList,''])
    }
  }
  const decrease = ( type ) => {
    if (type === "add"){
      let newArr = [...addList]
      newArr.pop()
      setAddList(newArr)
    } else {
      let newArr = [...dropList]
      newArr.pop()
      setDropList(newArr)
    }
    
  }
  const inputChangeHandler = (index,value,type) => {
    if (type === "add"){
      let newArr =[...addList]
      newArr[index]=value
      setAddList(newArr)
    } else {
      let newArr =[...dropList]
      newArr[index]=value
      setDropList(newArr)
    }
  }

  return (
    <div className="addDrop">
      <div>Welcome to the add drop page</div>

      <div className="addClass">
        {addList.map((crn,index) => 
          <div className="crnInput">
            <input
              type="text"
              value= {crn}
              onChange={(e) => inputChangeHandler(index,e.target.value,"add")}
            />
          </div>
        )}
        <AddCircleIcon className="addCrn" onClick={() => increase("add")}/>
        <RemoveCircleIcon className="removeCrn" onClick={() => decrease("add")}/>
        <button> Add Selected Courses</button>
        {addList.map(crn => <div>{crn}</div>)}
      </div>
      <div className="addClass">
        {dropList.map((crn,index) => 
          <div className="crnInput">
            <input
              type="text"
              value= {crn}
              onChange={(e) => inputChangeHandler(index,e.target.value,"drop")}
            />
          </div>
        )}
        <AddCircleIcon className="addCrn" onClick={() => increase("drop")}/>
        <RemoveCircleIcon className="removeCrn" onClick={() => decrease("drop")}/>
        <button> Drop Selected Courses </button>
        {dropList.map(crn => <div>{crn}</div>)}
      </div>

      {ongoingClasses  ?  ongoingClasses.map((e)=>{
          return <Class class_name={e.c_class_name} credits={e.credits} crn={e.crn}></Class>
      }): null}
    </div>
  );
};

export default AddDrop;