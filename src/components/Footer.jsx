import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
    padding: 10px;
    background-color: black;
    margin-top: 24px;
`



function Footer() {
    const date = new Date()
    const year = date.getFullYear()
  return (
      <Container>
          &copy; {year} [DEMO] - Timothy T. Joe 
    </Container>
  )
}

export default Footer