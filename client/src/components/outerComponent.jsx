import React from 'react'
import styled from 'styled-components'
import CostsAndReviews from './CostsAndReviews.jsx'
import FadedLine from './fadedLine.jsx'
import Reservations from './Reservations.jsx'

const StyledOuter = styled.div`
  width:376px;
  height: 352.2px;
  border-style: solid;
  border-width: 1px;
  border-color: #C0C0C0;
  padding: 15px 24px;
  margin: 15px;
`;

function OuterComponent(props) {
  return (
    <StyledOuter>
      <CostsAndReviews state = {props.state}/>
      <FadedLine/>
      <Reservations/>
    </StyledOuter>
  )
}

export default OuterComponent