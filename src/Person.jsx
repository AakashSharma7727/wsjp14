import React from 'react'

const Person = (props) => {
  return (
    <div className='person-box'>
      <img src={props.img} alt="" className='img' />
      <h6>Name : {props.title}</h6>
      <h3 style={{
        color: 'red'
      }}>Rating: {props.rating}</h3>
      <h4 style={{
        color: "green"
      }}>Category : {props.category}</h4>
      <h3>Price:{props.price}</h3>
      <h3>Id:{props.id}</h3>
    </div>
  )
}

export default Person
