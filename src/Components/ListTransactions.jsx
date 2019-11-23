import React from 'react'
import Transaction from './Transaction'

export default function ListTransactions(props) {
  return (
    <div className='list' >
      <h3>{props.name}</h3>
      {props.transactions.map(eachObject => {
        return (<div >
          <Transaction description={eachObject.description} value={eachObject.value} />
          {/* <p>{eachObject.description}</p> */}
          {/* <p>$ {eachObject.value}</p> */}
        </div>)
      })}
    </div>
  )
}
