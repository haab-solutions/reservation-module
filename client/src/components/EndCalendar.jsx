import React from 'react'
import styled from 'styled-Components'

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
  border-collapse: collapse;
  display: table;
`;

const TableCells = styled.td`
  border: 1px solid #D3D3D3;
  justify-content: center;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color:  #D3D3D3;
  }
`;

const TableCellGray = styled.td`
  border: 1px solid #D3D3D3;
  justify-content: center;
  text-align: center;
  text-decoration: line-through;
  color: #D3D3D3;
`;

const TableCellButton = styled.button`
  width:100%;
  height: 100%;
  justify-content: center;
  text-align: center;
  background: white;
  border: none;
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
    background-color:  #D3D3D3;
  }
`;


class Calendar extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      lastMonth: null,
      nextMonth: null,
      lastYear: null,
      nextYear: null,
      reservationDates: [],
      startDate: null,
      blackDate: null,
    }
  }
  componentDidMount() {
    if (this.state.month === 0) {
      this.setState({
        lastMonth: 11,
      })
    }
    if (this.state.month === 11) {
      this.setState({
        nextMonth: 0,
      })
    }
    this.setState({
      lastMonth: this.state.month - 1,
      nextMonth: this.state.month + 1,
      lastYear: this.state.year - 1,
      nextYear: this.state.year + 1,
    })
  }

  renderMonthYear() {
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September",
      "October", "November", "December" ]
    return ` ${months[this.state.month]} ${this.state.year}`
  }

  renderDay() {
    //reservation dates prepared and put in state
    if (this.state.reservationDates.length === 0) {
      const reservationDates = [];
      for (var reservation of this.props.state.reservations) {
        var startMonth = new Date(reservation.startDate).getMonth()
        var startDay = new Date(reservation.startDate).getDate()
        var endMonth = new Date(reservation.endDate).getMonth()
        var endDay = new Date(reservation.endDate).getDate()
        reservationDates.push({startMonth: startMonth, startDay: startDay, endMonth: endMonth, endDay: endDay,})
      }
      this.setState({
        reservationDates: reservationDates,
      })
    }

    //reservation dates in a 3-month period you're in
    const reservationsInMonth = [];
    for (var reservation of this.state.reservationDates) {
      if (reservation.startMonth === this.state.month || reservation.startMonth === this.state.lastMonth|| reservation.startMonth === this.state.nextMonth) {
        reservationsInMonth.push(reservation)
      }
    }

    //all dates between reservation dates
    const reservationDatesInMonth =[];
    for (var reservation of reservationsInMonth) {
      var counter = 0;
      var date1 = new Date (this.state.year, reservation.startMonth, reservation.startDay)
      var date2 = new Date (this.state.year, reservation.endMonth, reservation.endDay)
      var onDate = new Date(date1);
      var max = (date2.getTime() - date1.getTime())/(1000*3600*24)
      while (counter <=max) {
        let date = {month: onDate.getMonth(), day: onDate.getDate()};
        reservationDatesInMonth.push(date)
        onDate.setDate(onDate.getDate() + 1)
        counter++
      }
    }
    //for padding number with 0
    const zeroPad = (value, length) => {
      return `${value}`.padStart(length, '0');
    }
    //for getting the amount of days in a month
    const getMonthDays = (month = this.state.month, year = this.state.year) => {
      const months30 = [3, 5, 8, 10];
      const leapYear = year % 4 === 0;
      return month === 1
        ? leapYear
          ? 29
          : 28
        : months30.includes(month)
          ? 30
          : 31;
    }
    //for getting the first day of the month
    const getMonthFirstDay = (month = this.state.month, year = this.state.year) => {
      return (new Date(year, month, 1).getDay());
    }
    //variables of month days and the first day of the month
    const monthDays = getMonthDays();
    const monthFirstDay = getMonthFirstDay();

    //blank boxes for empty days
    let blanks = [];
    for (let i = 0; i < monthFirstDay; i++) {
      blanks.push(
        <td className = "calendar-day empty">{""}</td>
      )
    }
    //the days in the month chosen
    let daysInMonth = [];
    for (let d = 1; d <= monthDays; d++) {
      daysInMonth.push (
        <TableCells key = {d} className = {"calendar-day"} onClick = {() => {this.props.onSelect("endDate",d, this.state.month, this.state.year)}}>
          <TableCellButton>
            {d}
          </TableCellButton>
        </TableCells>
      );
    }
    //grayed out cells
    for (let j = 0; j < reservationDatesInMonth.length; j++) {
      var reservation = reservationDatesInMonth[j];
      for (let i = 0; i < daysInMonth.length; i++) {
        var blackout = [];
        if (this.state.startDate !== null) {
          var blackout = new Date(this.state.year, this.state.month, i)
          var startDate = new Date (this.state.startDate)
          var blackDate = {year: blackout.getFullYear(), month: blackout.getMonth(), day: i}
          console.log(this.state.startDate, "startdate")
        }
        if (daysInMonth[i].key === `${reservation.day}` && this.state.month === reservation.month) {
          daysInMonth.splice(i, 1, <TableCellGray key = {reservation.day} className = {"calendar-day gray"}>{reservation.day}</TableCellGray>)
          if (blackout.length !== 0 && this.state.startDate !== null && blackout > startDate) {
            this.setState({
              blackDate: blackDate,
            })
            return;
          }
        }
      }
    }
    console.log(this.state.blackDate, "this is the blackdate")
    //calendar structure
    let totalSlots = [...blanks, ...daysInMonth]
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row)
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
        cells = [];
      }
    })
    //deletes empty rows
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].length === 0) {
        rows.splice(i, 1)
      }
    }
    //wrapping rows in td
    let daysinmonth = rows.map((d, i) => {
      return <tr>{d}</tr>
    })
    return daysinmonth;
  }

  changeMonthYear (leftRight) {
    //for left
    if (leftRight === "left") {
      if (this.state.month === 0) {
        this.setState({
          year: this.state.year - 1,
          month: 11,
          lastMonth: 10,
          nextMonth: 0,
        })
        return;
      } else if (this.state.month === 1) {
        this.setState({
          month: 0,
          lastMonth: 11,
          nextMonth: 1,
        })
        return;
      } else if (this.state.month === 11) {
        this.setState({
          month: 10,
          lastMonth: 9,
          nextMonth: 11,
        })
        return;
      }
      this.setState({
        month: this.state.month - 1,
        lastMonth: this.state.lastMonth - 1,
        nextMonth: this.state.nextMonth - 1
      })
    //for right
    } else {
      if (this.state.month === 11) {
        this.setState({
          year: this.state.year + 1,
          month: 0,
          lastMonth: 11,
          nextMonth: 1,
        })
        return;
      } else if (this.state.month === 10) {
        this.setState({
          month: 11,
          lastMonth: 10,
          nextMonth: 0,
        })
        return;
      } else if (this.state.month === 0) {
        this.setState({
          month: 1,
          lastMonth: 0,
          nextMonth: 2,
        })
        return;
      }
      this.setState({
        month: this.state.month + 1,
        lastMonth: this.state.lastMonth + 1,
        nextMonth: this.state.nextMonth + 1,
      })
    }
    this.renderMonthYear();
  }

  rerenderMonthYear() {
    const newYear = new Date (this.props.state.startDate.year, this.props.state.startDate.month).getFullYear()
    const newMonth = new Date (this.props.state.startDate.year, this.props.state.startDate.month).getMonth()
    if (this.state.month !== newMonth || this.state.year !== newYear || this.state.startDate === null) {
      this.setState({
        year: newYear,
        month: newMonth,
        startDate: new Date (this.props.state.startDate.year, this.props.state.startDate.month, this.props.state.startDate.day),
      })
    }
  }

  render () {
    //changes state of year and month to start date if exists
    if (this.props.state.startDate !== null &&this.props.show === false) {
      this.rerenderMonthYear();
      this.renderDay();
    }
    const weekName = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    return this.props.show === false ? null :
    (
      <Modal>
        <ButtonWords>
          <LeftRight onClick = {() => this.changeMonthYear("left")}>
            Left
          </LeftRight>
          <DisplayWords>
            {this.renderMonthYear()}
          </DisplayWords>
          <LeftRight onClick = {() => this.changeMonthYear("right")}>
            Right
          </LeftRight>
        </ButtonWords>
        <WeekWords>
          {weekName.map(name =><WeekWord>{name}</WeekWord>)}
        </WeekWords>
        <TableDates>
          <tbody>
          {this.renderDay()}
          </tbody>
        </TableDates>
      </Modal>
    )
  }
}

export default Calendar