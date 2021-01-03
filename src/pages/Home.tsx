import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Card, Container } from 'react-bootstrap'
import QrReader from 'react-qr-reader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faSync } from '@fortawesome/free-solid-svg-icons'

export const Home: React.FC = () => {
  const [facing, setFacing] = useState<'environment' | 'user' | undefined>(
    'environment'
  )
  const history = useHistory()
  const handleScan = (data: string | null) => {
    if (data) {
      const url = new URL(data)
      const v = url.searchParams.get('v')
      if (v) {
        history.push(`/result/${v}`)
      }
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
    <Container className='p-3'>
      <Card className='text-center'>
        <Card.Header>
          {' '}
          <FontAwesomeIcon icon={faQrcode} className='text-3xl mr-2' />
          QR Code
        </Card.Header>
        <Card.Body>
          <QrReader
            delay={300}
            onScan={handleScan}
            onError={handleError}
            facingMode={facing}
          />
        </Card.Body>
        <Card.Footer>
          <Button variant='primary' onClick={changeCamera}>
            <FontAwesomeIcon icon={faSync} className='text-3xl mr-2' />
            Change Camera
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  )
}
