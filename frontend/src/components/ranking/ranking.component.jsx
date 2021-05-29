import React,{useState,useEffect} from 'react';

import './ranking.styles.scss';
import Select from 'react-select'
import { TextField } from '@material-ui/core';
import axios from '../../axios';


const Ranking = () => {

    const [ranking,setRanking] = useState()
    const [nameFilter,setNameFilter] = useState('')
    const [majorFilter,setMajorFilter] = useState([])
    const majorOptions = [
        { value: 'ISE', label: 'ISE (Informations Systems Engineering)' },
        { value: 'BLG', label: 'BLG (Bilgisayar Muhendisligi)' },
        { value: 'PHY', label: ' Physics' },
        { value: 'CHE', label: ' Chemistry Engineering' },
      ]

    useEffect(() => {
        if (majorFilter == ''){
            axios.get('/ranking/all').then( res =>{
                setRanking(res.data)
            })
        } else {
            axios.get(`/ranking/${majorFilter}`).then( res =>{
                setRanking(res.data)
            })
        }
    },[majorFilter])


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
            {majorFilter}
            <div className="rankingFilters">
                <form className="nameFilter" noValidate autoComplete="off">
                    <TextField onChange={ e => setNameFilter(e.target.value)} id="standard-basic" label="Name Filter" />
                </form>
                <div className="major-select">
                    <Select
                        // defaultValue={[colourOptions[2]]}
                        isMulti
                        onChange={handleChange}
                        name="colors"
                        options={majorOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
            </div>
            
            {ranking ?
                Object.values(ranking).filter( rnk => rnk[0].includes(nameFilter)).map((element)=>{
                    return (
                        <div key={element[0]} className="rank">{element[0]}  &emsp;{element[1].toFixed(3)}</div>
                    )
            }) : null}
            
            
            
        </div>
    )
}


export default Ranking;