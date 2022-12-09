import React from 'react'
import s from './Search.module.scss'
const Search = ({setValue,value}) => {
  return (
    <div className={s.block}>
      <p>
        Рекомендации
      </p>
      <div>
        <input type="search"
          placeholder='Search...'
          value={value}
          onChange={e=>setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search