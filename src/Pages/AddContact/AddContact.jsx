import React from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import { useState ,useEffect} from 'react'
import './AddContact.scss'
const AddContact = ({contacts,setcontacts}) => {
const {ContactID}=useParams()
const rez1 =useNavigate()

  useEffect(()=>{
if(ContactID){
  setform(contacts.filter(item=>item.id===Number(ContactID))[0])
}
  },[])
  const[form,setform]=useState({FirstName:'',LastName:'',Number:''})
  const HandleSubmit=(e)=>{
    e.preventDefault();
    if(ContactID){
      
      setcontacts(contacts.map(item=>item.id===form.id?form:item))
      setform({FirstName:'',LastName:'',Number:''});
      rez1(`/ShowContact/${ContactID}`);

    }
    else{
      setcontacts([...contacts,{id:Math.floor(Math.random()*1000),...form}])
setform({FirstName:'',LastName:'',Number:''});
rez1('/');
    }

  }
  const HandleChange=(e)=>{
setform({...form,[e.target.name]:e.target.value})
  }
  const handleForm = e => {
    setform({...form,[e.target.name]:e.target.value})
  }

  return (
    <div className='addcontact'>
      <form onSubmit={HandleSubmit} className='addContact-form' >
      <div><h1>Add New contact</h1></div>
        <div className='phone-input'>
<input name='FirstName'value={form.FirstName} onChange={HandleChange} placeholder='First-name'></input>
        </div>
<div className='phone-input'>
<input name='LastName'value={form.LastName} onChange={HandleChange} placeholder='Last-name'></input>
</div>
<div className='phone-input'>
<input name='Number'value={form.Number} onChange={HandleChange} placeholder='Phone-number'></input>
</div>
<div>
<select name={'favorite'} onChange={handleForm} value={form.favorite} className='handleform'>
                            <option value="favoriteContact">favoriteContact</option>
                            <option value="unFavoriteContact">unFavoriteContact</option>
                        </select>
</div>

<input type={"submit"} className='form-submit'/>
      </form>

    </div>
  )
}

export default AddContact
