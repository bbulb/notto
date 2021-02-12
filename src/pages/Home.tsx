import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faGlobe } from '@fortawesome/free-solid-svg-icons'

export const Home: React.FC = () => {
  const history = useHistory()
  const [url, setUrl] = useState('')
  const onGo = () => {
    const params = new URL(url).searchParams
    const v = params.getAll('v')
    if (v.length > 0) {
      history.push(`/result/${v}`)
    }
  }
  return (
    <Container className='p-3'>
      <Card className='text-center'>
        <CardHeader>
          {' '}
          <FontAwesomeIcon icon={faGlobe} className='text-3xl mr-2' />
          URL
        </CardHeader>
        <CardBody>
          <InputGroup>
            <Input
              value={url}
              onChange={(e) => {
                setUrl(e.target.value)
              }}
              placeholder='Enter a dhlottery url'
            />
            <InputGroupAddon addonType='append'>
              <Button onClick={onGo} color='primary'>
                Go!
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </CardBody>
        <CardFooter>
          <Button
            color='primary'
            onClick={() => {
              history.push('/scan')
            }}
          >
            <FontAwesomeIcon icon={faCamera} className='text-3xl mr-2' />
            or Scan QR Code
          </Button>
        </CardFooter>
      </Card>
    </Container>
  )
}
