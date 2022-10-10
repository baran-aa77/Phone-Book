import React from 'react'
import './Home.scss'
import TableContact from '../../Conponents/TableContact/TableContact'
const Home = ({contacts,setcontacts,filter,filterData,handleFilterBtn}) => {
  return (
    <div className='Home'>
      
      <TableContact contacts={contacts}  setcontacts={setcontacts} filter={filter} filterData={filterData} handleFilterBtn={handleFilterBtn} style={{width:'100%'}}></TableContact>
    </div>
  )
}

export default Home
