import React from 'react'
import { Navbar } from 'react-bootstrap'
import { faPray } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header: React.FC = () => {
  return (
    <Navbar bg='primary' expand='lg'>
      <Navbar.Brand className='text-light' href='#'>
        <FontAwesomeIcon icon={faPray} className='text-3xl mr-2' />
        notto
      </Navbar.Brand>
    </Navbar>
  )
}
