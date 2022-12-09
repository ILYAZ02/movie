import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.scss'
import logo from '../../img/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import icons from '../../img/icons.png'
function Header() {
  return (
        <div className={s.navbar}>
      <div>
      <img src={logo} alt="" />
      </div>
      
      <div className={s.gaps}>
      <NavLink to='/'>
        Главная
      </NavLink>
      <NavLink to='/Popular'>
        Популярные
      </NavLink>
      <NavLink to='/Comedies'>
        Комедии
      </NavLink>
      <NavLink to='/Melodramy'>
        Мелодрамы
      </NavLink>
      <NavLink to='/Fantastig'>
        Фантастика
      </NavLink>
      <NavLink to='/Fighters'>
        Боевики
      </NavLink>
      </div>
      <div className={s.icons}>
       <img src={icons} alt="" />
      </div>
    </div>
  )
}

export default Header

