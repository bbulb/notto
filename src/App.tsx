import React from 'react';
import './App.css';
import { Button, Card, Container, Navbar } from 'react-bootstrap';

export const App: React.FC = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Notto</Navbar.Brand>
    </Navbar>
    <Container className="p-3">
        <Card className="text-center">
      <Card.Header>QR Code</Card.Header>
          <Card.Body>Hello</Card.Body>
          <Card.Footer>
      <Button variant="primary">Button</Button>
          </Card.Footer>
      </Card>
    </Container>
    </>
  );
}
