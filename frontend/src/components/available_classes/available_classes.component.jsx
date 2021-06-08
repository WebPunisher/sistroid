import React, {useState,useEffect} from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import CircularProgress from '@material-ui/core/CircularProgress';
import './available_classes.styles.scss';


import axios from '../../axios';

const AvailableClasses = () => {

  const columns =  [
    {field: "id", hide: true},
    {field: "class_name", headerName: "Name", width: 160},
    {field: "pname", headerName: "Instructor", width: 200},
    {field: "crn", headerName: "CRN", width: 160},
    {field: "credits", headerName: "Credits", width: 160},
    {field: "remaining_capacity", headerName: "Rem.Capacity", width: 160},
    {field: "majors", headerName: "Major Restriction", width: 160},
    {field: "time", headerName: "Time", width: 160},
    {field: "letters", headerName: "Letters", width: 160}]

  const [info,setInfo] = useState({columns:columns,rows:[]})
  const [fetching,setFetching] = useState(true)
  useEffect(()=>{
	axios.get('/avaliable_classes').then( res =>{
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
      <h1> Avaliable Classes </h1>
      {fetching ? <CircularProgress className="availableClassesCirc" size="8rem"/>:
       <div>
          <div style={{ height: 700, width: '100%' }}>
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