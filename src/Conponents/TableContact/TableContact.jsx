import React from 'react'
import './TableContact.scss'
import add from '../../Images/add.png'
import { Link } from 'react-router-dom'
import TableRowContact from '../TableRowContact/TableRowContact'
import filterr from '../../Images/filterr.png'
import { useState } from 'react'
const TableContact = ({ contacts, setcontacts, filter, filterData, handleFilterBtn }) => {
  const [search, setSearch] = useState('')
  const handleSearch = e => {
    setSearch(e.target.value)
  }
  const [showfilterpicture,setshowfilterpicture] = useState('none')
  const showfilterPicture=()=>{
    setshowfilterpicture('flex')
  }

  return (

    <div className='TableContact'>
      <div className='header-button'>
        <h1>My Contacts</h1>
        <Link to='/Add-Contact'><img src={add} width='50px' style={{ margin: '10px' }} /></Link>
      </div>
      <div>
        <div className='filter-search'>
          <div>
            <img src={filterr} width='50px' onClick={showfilterPicture} />
          </div>
          <div>
            <input onChange={handleSearch} value={search} placeholder='Search Contact' />
          </div>
        </div>
        <div style={{display:showfilterpicture}}>
          {filterData.map(filterBtn => (
            <button onClick={() => handleFilterBtn(filterBtn.title)}
              style={{ backgroundColor: filterBtn.title === filter ? 'purple' : 'white' }}>
              {filterBtn.title}
            </button>
          ))}
        </div>
      </div>
      {contacts.map(contact => <TableRowContact
        contact={contact} contacts={contacts} setcontacts={setcontacts} />)}
    </div>
  )
}

export default TableContact
