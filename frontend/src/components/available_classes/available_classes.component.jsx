import React, {useState,useEffect} from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import './available_classes.styles.scss';


import axios from '../../axios';

const AvailableClasses = () => {

  const columns =  [
    {field: "id", hide: true},
    {field: "class_name", headerName: "Code", width: 125},
    {field: "class_desc", headerName: "Title", width: 220},
    {field: "pname", headerName: "Instructor", width: 220},
    {field: "crn", headerName: "CRN", width: 140},
    {field: "credits", headerName: "Credits", width: 140},
    {field: "remaining_capacity", headerName: "Rem.Capacity", width: 140},
    {field: "majors", headerName: "Major Restriction", width: 160},
    {field: "time", headerName: "Time", width: 160},
    {field: "letters", headerName: "Letters", width: 160}]

  const [info,setInfo] = useState({columns:columns,rows:[]})
  const [fetching,setFetching] = useState(true)
  useEffect(()=>{
	axios.get('/available_classes').then( res =>{
      console.log(res.data)
      res.data.forEach((item, i) => {
        item.id = i + 1;
      });
      setInfo({...info,rows:res.data})
      setFetching(false)
    })
  },[]) ;
  
  return (
    <div className="availableClasses">
      <h1> Available Classes </h1>
      {fetching ? <CircularProgress className="availableClassesCirc" size="8rem"/>:
       <div>
          <div style={{ height: 700, width: '100%',padding:20 }}>
          <DataGrid
              {...info}
              components={{
              Toolbar: GridToolbar,
              }}
          />
          </div>
      </div>}
    </div>
  );
}

export default AvailableClasses;