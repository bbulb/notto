import React, { useState } from 'react'
import './App.css'
import { Button, Card, Container, Navbar } from 'react-bootstrap'
import QrReader from 'react-qr-reader'

export const App: React.FC = () => {
  const [result, setResult] = useState('')
  const [facing, setFacing] = useState<'environment' | 'user' | undefined>(
    'environment'
  )
  const handleScan = (data: string | null) => {
    if (data) {
      setResult(data)
    }
  }
  const handleError = (err: unknown) => {
    console.log(err)
  }
  const changeCamera = () => {
    if (facing === 'environment') {
      setFacing('user')
    } else {
      setFacing('environment')
    }
  }
  return (
    <>
      <Navbar bg='primary' expand='lg'>
        <Navbar.Brand className='text-light'>Notto</Navbar.Brand>
      </Navbar>
      <Container className='p-3'>
        <Card className='text-center'>
          <Card.Header>QR Code</Card.Header>
          <Card.Body>
            <QrReader
              delay={500}
              onScan={handleScan}
              onError={handleError}
              facingMode={facing}
            />
          </Card.Body>
          <Card.Footer>
            <Button variant='primary' onClick={changeCamera}>
              Change Camera
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    </>
  )
}
