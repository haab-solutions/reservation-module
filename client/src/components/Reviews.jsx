import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 12px;
display: flex;
font-weight: bold;
color: #505050;
align-items: baseline;
padding-bottom: 20px;
`;

function Reviews (props) {
  return (
    <StyledDiv>{props.rating} {props.ratingAmount}
    </StyledDiv>
  )
}


export default Reviews