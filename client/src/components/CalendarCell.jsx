import React from 'react'
import styled from 'styled-components'


const TableCells = styled.td`
  border: 1px solid #D3D3D3;
  border-collapse: collapse;
  justify-content: center;
  text-align: center;
`;

function CalendarCell (props) {
  const THIS_YEAR = (new Date().getFullYear());
  const THIS_MONTH = (new Date().getMonth());

  return (
    <TableCells>CC</TableCells>
  )
}

export default CalendarCell