import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const History = ({history}) => {
  const rows = history.map((row, index) => {
    return (
      <tr key={index}>
        <td className='date'>{row.date}</td>
        <td className='debit'>{row.debit}</td>
        <td className='credit'>{row.credit}</td>
      </tr>
    )
  })
  
  return (
    <div className='container' data-test='History Container Div'>
      <table data-test='Table Primitive'>
        <thead data-test='Table Head Primitive'>
          <td data-test='Date Column Header'>Date</td>
          <td data-test='Withdraw Column Header'>Credit</td>
          <td data-test='Deposit Column Header'>Debit</td>
        </thead>

        <tbody data-test='Table Body Primitive'>
         {rows}
        </tbody>
      </table>
    </div>
  )
}

History.propTypes = {
  history: PropTypes.array
};

export default History;