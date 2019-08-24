import React from 'react'
import styled from 'styled-components'
import url(netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

const Star = styled.div


const StyledDiv = styled.div`
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 12px;
display: flex;
font-weight: bold;
color: #505050;
align-items: baseline;
padding-bottom: 10px;
`;


function Reviews (props) {
  return (
    <StyledDiv>{props.rating} {props.ratingAmount}
    </StyledDiv>
  )
}


export default Reviews