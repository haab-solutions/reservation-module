import React from 'react'
import styled from 'styled-components'
import CalendarCell from './CalendarCell.jsx'

const TableRow = styled.tr`
  border: 1px solid #D3D3D3;
  border-collapse: collapse;
`;

function CalendarRow (props) {
  return (
    <TableRow>
      <CalendarCell/>
      <CalendarCell/>
      <CalendarCell/>
      <CalendarCell/>
      <CalendarCell/>
      <CalendarCell/>
      <CalendarCell/>
    </TableRow>
  )
}

export default CalendarRow