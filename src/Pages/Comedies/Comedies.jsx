import React,{useState} from 'react'
import s from './Comedies.module.scss'
import Contentlike from './Contentlike.jsx'
const Comedies = ({com}) => {
  const [like,setLike]=useState(false)
  function amClick (){
    setLike(!like)
  }
  return (
    <div className={s.block}>
      {com.map(item =>(
        <Contentlike item={item}/>
      ))}
    </div>
  )
}

export default Comedies
