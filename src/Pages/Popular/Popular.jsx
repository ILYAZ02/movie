import React from 'react'
import s from './Popular.module.scss'
const Popular = ({pop}) => {
  return (
    <div className={s.block}>
      {pop.map(item =>(
        <div className={s.back}>
        <img src={item.image} alt="" />
        <h1>
        {item.price} {item.name}
        </h1>
      </div>
      ))}
    </div>
  )
}

export default Popular
