import React from 'react'

export default function Transaction(props) {
  return (
    <div id='each-transaction'>
      <p>{props.description}</p>
      <p>$ {props.value}</p>
    </div>
  )
}
