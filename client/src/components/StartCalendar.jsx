import React from 'react'
import styled from 'styled-Components'
import calendar from './CalendarHelpers/calendar.jsx'
import CalendarRow from './CalendarRow.jsx'

const Modal = styled.div`
  z-index:1;
  background: white;
  border: 1px solid #D3D3D3;
  border-radius: 4px;
  box-shadow: 0px 4px 15px 1px #C8C8C8;
  visibility: visible;
  position: fixed;
  bottom: 18.5%;
  width: 328px;
  height: 400px;
  margin: 0px 0px 16px;
  padding: 16px 16px;
  display:flex;
  flex-direction: column;
`;
const ButtonWords = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const DisplayWords = styled.div`
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-size: 18px;
  color: #404040;
  font-weight: bold;
`;

const LeftRight = styled.button`
  background-color: white;
  text-align: center;
  width: 40px;
  height: 40px;
  border: 1px solid #D3D3D3;
  &:hover {
    cursor: pointer;
  };
  &:focus {
    outline: 0;
  };
  &:active {
    background-color: #D3D3D3;
  }
`;

const WeekWords = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
`;
const WeekWord = styled.div`
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-size: 13px;
  color: #404040;
`

const TableDates = styled.table`
width: 100%;
height: 70%;
border: 1px solid #D3D3D3;
border-collapse: collapse;
`;

class Calendar extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth()
    }
  }

  renderMonthYear() {
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September",
      "October", "November", "December" ]
    return ` ${months[this.state.month]} ${this.state.year}`
  }

  changeMonthYear (leftRight) {
    if (leftRight === "left") {
      if (this.state.month === 0) {
        this.setState({
          year: this.state.year - 1,
          month: 11
        })
        return;
      }
      this.setState({
        month: this.state.month - 1
      })
      this.renderMonthYear();
    } else {
      if (this.state.month === 11) {
        this.setState({
          year: this.state.year + 1,
          month: 0
        })
        return;
      }
      this.setState({
        month: this.state.month + 1
      })
      this.renderMonthYear();
    }
  }

  render () {


    return this.props.show === false ? null :
    (
      <Modal>
        <ButtonWords>
          <LeftRight onClick = {()=> this.changeMonthYear("left")}>
            Left
          </LeftRight>
          <DisplayWords>
            {this.renderMonthYear()}
          </DisplayWords>
          <LeftRight onClick = {()=> this.changeMonthYear("right")}>
            Right
          </LeftRight>
        </ButtonWords>
        <WeekWords>
          <WeekWord>Su</WeekWord>
          <WeekWord>Mo</WeekWord>
          <WeekWord>Tu</WeekWord>
          <WeekWord>We</WeekWord>
          <WeekWord>Th</WeekWord>
          <WeekWord>Fr</WeekWord>
          <WeekWord>Sa</WeekWord>
        </WeekWords>
        <TableDates>
          <CalendarRow/>
          <CalendarRow/>
          <CalendarRow/>
          <CalendarRow/>
          <CalendarRow/>
        </TableDates>
      </Modal>
    )
  }
}

export default Calendar