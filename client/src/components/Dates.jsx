import React from 'react'
import styled from 'styled-components'

const DatesWord = styled.div`
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 12px;
font-weight: bold;
color: #505050;
padding-bottom: 3px;
`;
const DatesOuter = styled.div`
padding-bottom: 13px;
`;
const DatesBox = styled.div`
width:325.6px;
height: 41.6px;
width: 99%
margin-left: auto;
margin-right: auto;
border-color: #DCDCDC;
border-style: solid;
border-width: 1px;
display: flex;
`;

const Arrow = styled.div`
width: 15%;
height: 24px;
`;

const StyledCheck = styled.button`
  width: 50%;
  height:40px;
  background: white;
  border: none;
`;


function Dates (props) {
  return (
    <DatesOuter>
      <DatesWord>Dates</DatesWord>
      <DatesBox>
        <StyledCheck>click me</StyledCheck>
        <Arrow/>
        <StyledCheck>click me</StyledCheck>
      </DatesBox>
    </DatesOuter>
  )
}

export default Dates