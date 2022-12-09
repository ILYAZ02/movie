import React from 'react'
import { useState } from 'react'
import s from './Content.module.scss'
import likeImg from '../../img/new2.png'
import likedImg from '../../img/new.png'
const Content = ({ item }) => {
  const [like, setLike] = useState(false)

  function anClick() {
    setLike(!like)
  }
  return (
    <div>

      <div className={s.back}>
        <img src={item.image} alt="" />
        <h1>
          {item.price} {item.name}
        </h1>
        <div className={s.like} >
        <img
          style={{ width: '35px' }}
          onClick={anClick}
          src={like ? likedImg : likeImg}
          alt="like" />
      </div>
      </div>
          
    </div>
  )
}

export default Content