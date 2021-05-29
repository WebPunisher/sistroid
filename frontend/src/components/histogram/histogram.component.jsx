import React,{useState,useEffect} from "react";
import './histogram.styles.scss';

import { TextField } from '@material-ui/core';
// import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';


const Histogram = props => {
    
    const [crn,setCrn] = useState('')
    const [temp,setTemp] = useState('')

  return (
    <div className="histogram">
        <div className="searcHistogram">
            <form className="nameFilter" noValidate autoComplete="off">
                <TextField onChange={ e => setTemp(e.target.value)} id="standard-basic" label=" CRN of the Course" />
            </form>
            <div className="buttonParent">
                <Button className="searchButton" variant="contained"  onClick={()=>setCrn(temp)} > Search </Button>
            </div>
        </div>
        {crn ? <img src = {'http://127.0.0.1:1999/crn_histogram/' + crn } className="histogramImage" /> : null}
        
    </div>
  );
};

export default Histogram;