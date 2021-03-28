import React,{useState,useEffect} from 'react';

import axios from '../../axios';


const Deneme = () => {

    const [ranking,setRanking] = useState()

    useEffect(()=>{
        axios.get('/ranking').then( res =>{
            setRanking(res.data)
            // console.log(Object.values(res.data))
        })
    },[]) ;

    return (
        
        <div> 
            {ranking ?
            Object.values(ranking).map((element)=>{
                return (
                    <div>{element[0]}  &emsp;{element[1].toFixed(3)}</div>
                )
            }) : null}
        </div>
    )
}


export default Deneme;