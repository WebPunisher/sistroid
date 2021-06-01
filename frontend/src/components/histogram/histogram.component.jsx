import React,{useState} from "react";
import './histogram.styles.scss';

import { TextField } from '@material-ui/core';
// import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Select from 'react-select'

const Histogram = props => {
    
    const baseURL = 'http://127.0.0.1:1999/'
    const [imageUrl,setImageUrl] = useState(baseURL + '/crn_histogram/1')
    const [crn,setCrn] = useState('')
    const [className,setClassName] = useState('')
    const [teacherId,setTeacherId] = useState()
    const [hType,setHType] = useState('crn')

    const urls = {
        crn: "crn_histogram",
        class: "class_histogram",
        teacher: "teacher_histogram",
        teacher_class: "teacher_class_histogram"
    }
    const majorOptions = [
        { value: 'crn', label: 'CRN' },
        { value: 'class', label: 'CLASS' },
        { value: 'teacher', label: ' TEACHER' },
        { value: 'teacher_class', label: ' TEACHER-CLASS' },
      ]
    const handleChange = (e) => {
        setHType(e.value)
        setTeacherId()
        setClassName('')
        setCrn('')
    }
    const urlSetter = () => {
        if(hType === 'crn'){setImageUrl(baseURL+urls.crn+'/'+crn)}
        if(hType === 'class'){setImageUrl(baseURL+urls.class+'/'+className)}
        if(hType === 'teacher'){setImageUrl(baseURL+urls.teacher+'/'+teacherId)}
        if(hType === 'teacher_class'){setImageUrl(baseURL+urls.teacher_class+'/'+teacherId+'/'+className)}
    }
  return (
    <div className="histogram">
        
        <div className="searcHistogram">
            <div className="major-select">
                <Select
                    // defaultValue={majorOptions[0]}
                    label
                    onChange={handleChange}
                    name="colors"
                    options={majorOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>

            <div className="histogramFilterParent">
                {hType === "crn" ? 
                    <form className="nameFilter" noValidate autoComplete="off">
                        <TextField className="myTextField" onChange={ e => setCrn(e.target.value)} id="standard-basic" label=" CRN of the Course" />
                    </form>: null}
                {hType === "class" ?
                    <form className="nameFilter" noValidate autoComplete="off">
                        <TextField onChange={ e => setClassName(e.target.value)} id="standard-basic" label=" Class Name" />
                    </form>: null}
                {hType === "teacher" ?
                    <form className="nameFilter" noValidate autoComplete="off">
                        <TextField onChange={ e => setTeacherId(e.target.value)} id="standard-basic" label=" Id of teacher" />
                    </form>: null}
                {hType === "teacher_class" ?
                    <form className="nameFilter" noValidate autoComplete="off">
                        <TextField onChange={ e => setTeacherId(e.target.value)} id="standard-basic" label=" Id of teacher" /> &emsp;
                        <TextField onChange={ e => setClassName(e.target.value)} id="standard-basic" label=" Class Name" />
                    </form>: null}
            </div>
        
            <div className="buttonParent">
                <Button className="searchButton" variant="contained" onClick={urlSetter}   > Search </Button>
            </div>
        </div>
        {imageUrl ? <img src = { imageUrl } alt="No such histogram" className="histogramImage" /> : null}
       
    </div>
  );
};

export default Histogram;