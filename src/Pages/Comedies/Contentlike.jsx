import React,{useState} from 'react'
import s from './Contentlike.module.scss'
import img from '../../img/new2.png'
import setimg from '../../img/new.png'
const Contentlike = ({item}) => {
    const [like,setLike]=useState(false)
  function likeClick (){
    setLike(!like)
  }
  return (
  
    <div>
        <div className={s.back}>
        <img src={item.image} alt="" />
        <h1>
        {item.price} 
        {item.name}
        </h1>
<div className={s.like}>
        <img
        width='35px'
        onClick={likeClick} 
        src={like ? setimg : img}
         alt="" />
</div>
       
      </div>
    </div>
  )
}

export default Contentlike