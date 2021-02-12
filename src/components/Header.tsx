import React from 'react'
import { faPray } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, NavbarBrand } from 'reactstrap'

export const Header: React.FC = () => {
  return (
    <Navbar color='primary' expand='lg'>
      <NavbarBrand className='text-light' href='#'>
        <FontAwesomeIcon icon={faPray} className='text-3xl mr-2' />
        notto
      </NavbarBrand>
    </Navbar>
  )
}
