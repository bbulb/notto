import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice, faLaughBeam, faLink } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Table,
} from 'reactstrap'

const parseTicket = (value: string) => {
  const splited = value.split(/[a-z]/)
  const round = splited.shift()
  const numbers = splited.map((line) => {
    return [
      +line.slice(0, 2),
      +line.slice(2, 4),
      +line.slice(4, 6),
      +line.slice(6, 8),
      +line.slice(8, 10),
      +line.slice(10, 12),
    ]
  })
  return {
    round: round === undefined ? 0 : +round,
    numbers,
  }
}

const getShuffledArray = (input: number[]) => {
  const array = Object.assign([], input)
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

interface ITicketProps {
  numbers: Array<Array<number>>
}

const Ticket: React.FC<ITicketProps> = ({ numbers }) => {
  return (
    <Table striped bordered>
      <tbody>
        {numbers.map((line, index) => {
          return (
            <tr key={index}>
              <th>{String.fromCharCode(index + 65)}</th>
              {line.map((number, jndex) => {
                return <td key={jndex}>{number}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

interface IResultParams {
  v: string
}

export const Result: React.FC = () => {
  const { v } = useParams<IResultParams>()
  const ticket = parseTicket(v)
  const [generated, setGenerated] = useState<Array<Array<number>>>([])

  const generateNumbers = () => {
    const fullNumbers = []
    for (let i = 1; i < 46; i++) {
      fullNumbers.push(i)
    }

    const rejected: number[] = []
    ticket.numbers.forEach((line) => {
      line.forEach((num) => {
        rejected.push(num)
      })
    })

    const filtered = fullNumbers.filter((num) => {
      return !rejected.includes(num)
    })

    const result: number[][] = []

    for (let i = 0; i < 5; i++) {
      const shuffled = getShuffledArray(filtered)
      result.push([
        shuffled[0],
        shuffled[1],
        shuffled[2],
        shuffled[3],
        shuffled[4],
        shuffled[5],
      ])
    }

    setGenerated(result)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
  }

  return (
    <Container className='p-2'>
      <Card className='text-center'>
        <CardHeader className='font-weight-bold'>
          제{ticket?.round}회
        </CardHeader>
        <CardBody>
          <Ticket numbers={ticket?.numbers} />
        </CardBody>
        <CardFooter>
          <Button color='primary' onMouseDown={generateNumbers}>
            <FontAwesomeIcon icon={faDice} className='text mr-1' />
            notto!
          </Button>
          <Button
            className='ml-2'
            color='primary'
            onMouseDown={copyToClipboard}
          >
            <FontAwesomeIcon icon={faLink} className='text-3xl mr-2' />
            Copy Link
          </Button>
        </CardFooter>
      </Card>
      <Card className='text-center mt-2'>
        <CardHeader>
          <FontAwesomeIcon icon={faLaughBeam} className='text-3xl mr-2' />
          Numbers of week
        </CardHeader>
        <CardBody>
          {generated.length > 0 ? (
            <Ticket numbers={generated} />
          ) : (
            <span>
              Press <i>notto!</i> button.
            </span>
          )}
        </CardBody>
      </Card>
    </Container>
  )
}
