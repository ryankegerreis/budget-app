import React from 'react'

export default function ListTransactions(props) {
  return (
    <div >
      <h3>{props.name}</h3>
      {props.transactions.map(eachObject => {
        return (<div className='list'>
          <p>{eachObject.description}</p>
          <p>$ {eachObject.value}</p>
        </div>)
      })}
    </div>
  )
}
