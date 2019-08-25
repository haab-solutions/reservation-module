import React from 'react'
import styled from 'styled-components'
import Dates from './Dates.jsx'
import Guests from './Guests.jsx'

const StyledResOuter = styled.div`
  padding: 20px 0px 20px 0px;
  display: flex;
  flex-direction: column;
`;

function Reservations (props) {
  return (
    <StyledResOuter>
      <Dates/>
      <Guests/>
    </StyledResOuter>
  )
}

export default Reservations