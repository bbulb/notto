import React from 'react'
import { Navbar } from 'react-bootstrap'

export const Header: React.FC = () => {
  return (
    <Navbar bg='primary' expand='lg'>
      <Navbar.Brand className='text-light' href='/'>
        notto
      </Navbar.Brand>
    </Navbar>
  )
}
