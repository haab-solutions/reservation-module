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
height: 40px;
width: 100%;
margin-left: auto;
margin-right: auto;
border-color: #DCDCDC;
border-style: solid;
border-width: 1px;
display: flex;
align-items: flex-end;
`;

const GuestsButton = styled.button`
height: 100%;
width: 100%;
background: white;
border: none;
display: flex;
align-items: flex-end;
justify-content: space-between;
padding-right: 20px;
`;

const GuestsWords = styled.div`
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 17px;
color: #404040;
`;

const ArrowDown = styled.i`
border: solid black;
height: 5px;
width: 5px;
border-width: 0 1px 1px 0;
display: inline-block;
padding: 3px;
transform: rotate(45deg);
-webkit-transform: rotate(45deg);
align-self: flex-start;
`;

const ArrowUp = styled.i`
border: solid black;
height: 5px;
width: 5px;
border-width: 0 1px 1px 0;
display: inline-block;
padding: 3px;
transform: rotate(-135deg);
-webkit-transform: rotate(-135deg);
align-self: flex-start;
`;

class Guests extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }

  showGuestsModal() {
    this.setState({
      show: true
    })
  }

  hideGuestsModal() {
    this.setState({
      show: false
    })
  }

  render () {
    const word = this.props.state.guestsChosen === 1 ? "guest": "guests";
    return (
      <div>
        <GuestsWord>Guests</GuestsWord>
        <GuestsBox>
          <GuestsButton>
            <GuestsWords>
              {this.props.state.guestsChosen} {word}
            </GuestsWords>
              <ArrowDown></ArrowDown>
          </GuestsButton>
        </GuestsBox>
      </div>
    )
  }
}

export default Guests