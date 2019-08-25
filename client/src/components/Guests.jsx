import React from 'react'
import styled from 'styled-components'

const GuestsWord = styled.div`
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 12px;
font-weight: bold;
color: #505050;
padding-bottom: 3px;
`;

const GuestsBox = styled.div`
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

function Guests (props) {
  return (
    <div>
      <GuestsWord>Guests</GuestsWord>
      <GuestsBox>input Guest drop down table here</GuestsBox>
    </div>
  )
}

export default Guests