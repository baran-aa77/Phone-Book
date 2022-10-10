import React from 'react'
import { Link } from 'react-router-dom'
import './TableRowContact.scss'
import Delete from '../../Images/delete.png'
import './TableRowContact.scss'
const TableRowContact = ({ contact, contacts, setcontacts }) => {
    const handleDelete = (id) => {
        setcontacts(contacts.filter((contact => (contact.id !== id))))
    }
    return (
        <div key={contact.id}>
            <div className='Tablerow'>
                <Link to={`/ShowContact/${contact.id}`}> <img src={`https://avatars.dicebear.com/api/avataaars/:${contact.id}.svg`} width='70px' /></Link>
                <div className='delete-content'>
                    <div>
                        <div>{contact.FirstName} {contact.LastName}</div>
                        <div>{contact.Number}</div>
                        <div>{contact.favorite}</div>
                    </div>

                    <div onClick={() => handleDelete(contact.id)} className='deletecontact'><img src={Delete} width='50px' /></div>
                </div>
            </div>

        </div>
    )
}

export default TableRowContact
