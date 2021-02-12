import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faSync } from '@fortawesome/free-solid-svg-icons'
import QrReader from 'react-qr-reader'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
} from 'reactstrap'

export const Scan: React.FC = () => {
  const history = useHistory()
  const [facing, setFacing] = useState<'environment' | 'user' | undefined>(
    'environment'
  )
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
        <CardHeader>
          {' '}
          <FontAwesomeIcon icon={faQrcode} className='text-3xl mr-2' />
          QR Code
        </CardHeader>
        <CardBody>
          <QrReader
            delay={300}
            onScan={handleScan}
            onError={handleError}
            facingMode={facing}
          />
        </CardBody>
        <CardFooter>
          <Button color='primary' onClick={changeCamera}>
            <FontAwesomeIcon icon={faSync} className='text-3xl mr-2' />
            Change Camera
          </Button>
        </CardFooter>
      </Card>
    </Container>
  )
}
