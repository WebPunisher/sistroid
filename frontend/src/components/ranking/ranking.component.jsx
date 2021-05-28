import React,{useState,useEffect} from 'react';

import './ranking.styles.scss';
import Select from 'react-select'
import { TextField } from '@material-ui/core';
import axios from '../../axios';


const Ranking = () => {

    const [ranking,setRanking] = useState()
    const [nameFilter,setNameFilter] = useState('')
    const [majorFilter,setMajorFilter] = useState([' '])
    const colourOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'Hal Frick', label: 'Hal Frick' },
        { value: 'kal', label: 'kal' }
      ]

    useEffect(()=>{
        axios.get('/ranking').then( res =>{
            setRanking(res.data)
            // console.log(Object.values(res.data))
        })
    },[]) ;

    const contains = str => {
        majorFilter.forEach((el) => {
            if (str.includes(el)){
                return true
            }
        })
        return false
    }
    const handleChange = (values) => {
        let valueArr=[]
        values.forEach((value)=>{
            valueArr.push(value.value)
        })
        setMajorFilter(valueArr)
    }
    return (
        
        <div className="ranking">
            {nameFilter}
            <div>
                <form className="nameFilter" noValidate autoComplete="off">
                    <TextField onChange={ e => setNameFilter(e.target.value)} id="standard-basic" label="Name Filter" />
                </form>
                <div className="major-select">
                    <Select
                        // defaultValue={[colourOptions[2]]}
                        isMulti
                        onChange={handleChange}
                        name="colors"
                        options={colourOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
            </div>
            
            {ranking ?
                Object.values(ranking).filter( rnk => rnk[0].includes(nameFilter)).map((element)=>{
                    return (
                        <div className="rank">{element[0]}  &emsp;{element[1].toFixed(3)}</div>
                    )
            }) : null}
            
            {/* {ranking ?
            Object.values(ranking).filter( rnk => contains(rnk[0])).map((element)=>{
                return (
                    <div className="rank">{element[0]}  &emsp;{element[1].toFixed(3)}</div>
                )
            }) : null} */}
            
            
        </div>
    )
}


export default Ranking;