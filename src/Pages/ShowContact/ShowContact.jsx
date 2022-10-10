import React, { useEffect, useState } from 'react'
import {useParams, useNavigate, Link} from "react-router-dom";
import './ShowContact.scss'
import back from '../../Images/back1.png'
const ShowContact = ({contacts}) => {
    const[user,setuser]=useState({});
    const {ContactID}=useParams();
    useEffect(()=>{
        setuser(contacts.filter(person=>person.id===Number(ContactID))[0])

    },[])
  return (
    <div className='showContact'>
      
      <div className='Back-Edit'>
 <Link to='/' style={{textDecoration: 'none'}}> <div style={{display:'flex'}}><img src={back} width='30px'/><p style={{color:'black'}}>Contacts</p></div></Link>
  <Link to={`/Edit-Contact/${ContactID}` }className='edit-contact'>Edit</Link>
  </div>

  <div>
    <div >
  <img src={`https://avatars.dicebear.com/api/avataaars/:${ContactID}.svg`} width='100px' style={{borderRadius:'80px', border:'3px solid purple',padding:'10px'}}/> 

    </div>
    <div className='contact-information'>
    <div>{user.FirstName}</div>
    <div>{user.Number}</div>
    </div>

  </div>


   

  
    </div>
  )
}

export default ShowContact
