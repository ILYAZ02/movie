import React, { useState } from 'react'
import s from './Home.module.scss'
import Slider from '../../Components/Slider/Slider.jsx'
import Search from '../../Components/Search/Search.jsx'
import Content from '../Content/Content'
const Home = ({mov}) => {
  const[value,setValue]=useState('')
  const allData = mov.filter(item=>item.name.toLowerCase().includes(value))
  return (
    <div>

      <Slider/>
      <Search setValue={setValue} value={value}/>

      <div className={s.block}>
     {allData.map(item =>(
       <Content item={item} key={item.id}/>
      ))}
    </div>
    </div>
  )
}

export default Home
