import React from 'react'
import './Home.scss'
import TableContact from '../../Conponents/TableContact/TableContact'
const Home = ({contacts,setcontacts}) => {
  return (
    <div className='Home'>
      
      <TableContact contacts={contacts} setcontacts={setcontacts}></TableContact>
    </div>
  )
}

export default Home
