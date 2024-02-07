import React from 'react'

const Card = (props) => {
    console.log(props.name);
  return (
    <div className='card'>
      <img src={props.links} alt="" />
       <div className="desc">
        <h1 className='h1'>{props.name}</h1>
        <p className='para'>{props.desc}</p>
        </div>
    </div>
  )
}

export default Card
