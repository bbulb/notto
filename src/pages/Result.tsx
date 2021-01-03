import { useState } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const parseTicket = (value: string) => {
  const splited = value.split('q')
  const round = splited.shift()
  const numbers = splited.map((line) => {
    return [
      +line.slice(0, 2),
      +line.slice(2, 4),
      +line.slice(4, 6),
      +line.slice(6, 8),
      +line.slice(8, 10),
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
      <Card className='text-center m-1'>
        <Card.Title className='mt-3'>제{ticket?.round}회</Card.Title>
        <Card.Body>
          <Ticket numbers={ticket?.numbers} />
        </Card.Body>
        <Card.Footer>
          <Button variant='primary' onClick={generateNumbers}>
            No!tto
          </Button>
          <Button className='ml-1' variant='primary' onClick={copyToClipboard}>
            Copy to clipboard
          </Button>
        </Card.Footer>
      </Card>
      <Card className='text-center m-1'>
        <Card.Header>Numbers of week</Card.Header>
        <Card.Body>
          <Ticket numbers={generated} />
        </Card.Body>
      </Card>
    </Container>
  )
}
