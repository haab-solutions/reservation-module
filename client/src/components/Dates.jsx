import React from 'react'
import styled from 'styled-components'
import StartCalendar from './StartCalendar.jsx'
import EndCalendar from './EndCalendar.jsx'
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
  height: 22px;
  width: 95.5%;
  padding: 8px;
  margin-left: auto;
  margin-right: auto;
  border-color: #DCDCDC;
  border-style: solid;
  border-width: 1px;
  display: flex;
`;

const ArrowRight = styled.div`
  width: 4px;
  height: 4px;
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  align-self: center;
`;


const StyledCheck = styled.button`
  width: 50%;
  background: white;
  border: none;
`;

const CalendarWords = styled.div`
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 17px;
color: #404040;
`;

class Dates extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      start: false,
      end: false,
    }
  }

  onShow (string) {
    if (string === "start") {
      if (this.state.end === true) {
        this.setState({
          end: false,
        })
      }
    }
    if (this.state.start === true) {
      this.setState({
        start: false,
      })
    }
    const bool = this.state[string]
    var obj = {}
    obj[string] = !bool
    this.setState(obj)
  }

  render () {
    return (
      <DatesOuter>
        <DatesWord>Dates</DatesWord>
        <StartCalendar show = {this.state.start} onShow = {this.onShow.bind(this)} state = {this.props.state} key = {"startCalendar"} onSelect = {this.props.onSelect} onClear = {this.props.onClear}
        />
        <EndCalendar show = {this.state.end} onShow = {this.onShow.bind(this)} state = {this.props.state} key = {"endCalendar"} onSelect = {this.props.onSelect} onClear = {this.props.onClear}
        />
        <DatesBox>
          <StyledCheck onClick = {()=> this.onShow("start")}>
            <CalendarWords>Check-in</CalendarWords>
          </StyledCheck>
          <ArrowRight></ArrowRight>
          <StyledCheck onClick = {()=> this.onShow("end")}>
            <CalendarWords>Checkout</CalendarWords>
          </StyledCheck>
        </DatesBox>
      </DatesOuter>
    )
  }
}

export default Dates