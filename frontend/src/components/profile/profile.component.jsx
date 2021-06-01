import React,{useState,useEffect} from "react";
import './profile.styles.scss';

import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import axios from '../../axios';

const Profile = props => {

  const [gpa,setGpa] = useState()
  const [info,setInfo] = useState()
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [editingContact,setEditingContact] = useState(false)

  useEffect(() => {
    axios.get(`/student_info/${sessionStorage.getItem('id')}`,{headers:{id:sessionStorage.getItem('id'),token:sessionStorage.getItem('token')}})
    .then((response) => {
      console.log(response.data);
      setInfo(response.data.personal_information)
      setGpa(response.data.GPA)
    }, (error) => {
      console.log(error);
    });
  },[])

  return (
    
    <div className="profilePage">
      {info?
        <div>
          <img className="profileImage" alt="profileImage" src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
          <div className="generalInfo">
              <div className="infoHeader"> General Information </div>
              <div className="profileInput"><span className="boldClass">Name  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;</span>{info.pname} {info.psurname} </div>
              <div className="profileInput"><span className="boldClass">Student Status &emsp;&emsp;</span>  Active </div>
              <div className="profileInput"><span className="boldClass">Class Standings &emsp;&nbsp;</span>  Sophomore </div>
              <div className="profileInput"><span className="boldClass">Major </span> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  {info.major ==='BLG' ? <span>Computer Enginnering</span> : null}    </div>
              <div className="profileInput"><span className="boldClass">GPA </span> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;  {gpa}    </div>
          </div>
          <div className="contactInfo">
              <div className="infoHeader"> Contact Information <EditIcon onClick={()=> setEditingContact(!editingContact)} className="editIcon" /> </div>
              {editingContact?
                <div>
                  <form className="profileInput" noValidate autoComplete="off">
                      <TextField onChange={ e => setEmail(e.target.value)} id="filled-basic" variant="filled" label="Email" placeholder={info.mail}/>
                      {email}
                      <Button className="buttonInMiddle" variant="contained">Apply</Button>
                  </form>
                  <form className="profileInput" noValidate autoComplete="off">
                      <TextField onChange={ e => setPhone(e.target.value)}   id="filled-basic" variant="filled" label="Phone" placeholder="+905074668275" type="number"/>
                      {phone}
                      
                  </form> 
                </div>:
                <div>
                  <div className="profileInput"><span className="boldClass">Email &emsp;&emsp;</span>  {info.mail} </div>
                  <div className="profileInput"><span className="boldClass">Phone Number &emsp;&nbsp;</span>  +905058396304 </div>
                </div> 
              }
            
          </div>
        </div> : null}
        <button onClick={()=>alert(sessionStorage.getItem('token'))}>tokengetter</button>
        <button onClick={()=>alert(sessionStorage.getItem('id'))}>idgetter</button>
    </div> 
  );
};

export default Profile;