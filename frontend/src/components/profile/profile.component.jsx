import React,{useState} from "react";
import './profile.styles.scss';

import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const Profile = props => {

 
  const [email,setEmail] = useState('')
  const [secMail,setSecMail] = useState('')
  const [phone,setPhone] = useState('')
  const [editingContact,setEditingContact] = useState(false)
//   const [] = useState('')

  return (
    <div className="profilePage">

        <img className="profileImage" src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
        <div className="generalInfo">
            <div className="infoHeader"> General Information </div>
            <div className="profileInput"><span className="boldClass">Student Status &emsp;&emsp;</span>  Active </div>
            <div className="profileInput"><span className="boldClass">Class Standings &emsp;&nbsp;</span>  Sophomore </div>
            <div className="profileInput"><span className="boldClass">Major </span> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;   Information Systems Engineering    </div>
        </div>
        <div className="contactInfo">
            <div className="infoHeader"> Contact Information <EditIcon onClick={()=> setEditingContact(!editingContact)} className="editIcon" /> </div>
            {editingContact?
              <div>
                <form className="profileInput" noValidate autoComplete="off">
                    <TextField onChange={ e => setEmail(e.target.value)} id="filled-basic" variant="filled" label="Email" placeholder="jack@sistroid.edu"/>
                    {email}
                    <Button className="buttonInMiddle" variant="contained">Apply</Button>
                </form>
                <form className="profileInput" noValidate autoComplete="off">
                    <TextField onChange={ e => setPhone(e.target.value)}  id="filled-basic" variant="filled" label="Phone" placeholder="+905074668275" type="number"/>
                    {phone}
                    
                </form> 
              </div>:
              <div>
                <div className="profileInput"><span className="boldClass">Email &emsp;&emsp;</span>  jack@sistroid.edu </div>
                <div className="profileInput"><span className="boldClass">Class Standings &emsp;&nbsp;</span>  +905058396304 </div>
              </div> 
            }
           
            {/* <form className="profileInput" noValidate autoComplete="off">
                <TextField onChange={ e => setSecMail(e.target.value)}  id="filled-basic" variant="filled" label="Secondary Email" />
                {secMail}
            </form> */}
        </div>
        
    </div>
  );
};

export default Profile;