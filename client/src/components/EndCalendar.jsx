import React from 'react'
import styled from 'styled-Components'

const Modal = styled.div`
  width: 500px;
  z-index:1;
  background: white;
  border: 1px solid #D3D3D3;
  border-radius: 4px;
  box-shadow: 0px 4px 15px 1px #C8C8C8;
  visibility: visible;
  position: fixed;
  bottom: 31.5%;
  width: 328px;
  height: 300px;
  margin: 0px 0px 16px;
  padding: 16px 16px;
  display:flex;
`;

class Calendar extends React.Component {
  constructor (props) {
    super (props)

  }
  render () {
    if (this.props.show === false) {
      return null;
    }
    return (
      <Modal> this is from the end calendar component</Modal>
    )
  }
}

export default Calendar