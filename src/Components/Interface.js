import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Name from './Name '
import Price from './Price'
import Description from './Description'
import {prd } from '../product'


function Interface() {
  return (
    <div className='card'> 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prd.url} />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
         <Description/>
        </Card.Text>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
       </Card>
   
   
  </div>
  )
}

export default Interface