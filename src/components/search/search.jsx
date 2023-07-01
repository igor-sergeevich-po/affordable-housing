import React from 'react';
import './search.css'

export const Search = ({filterKey, setFilterKey}) => {
  return (
    <div className='wrapperr'>
        <label className='label'>
          Поиск:
          <input id='searchInput' value={filterKey} className='search' type='text' placeholder='введите текст' onChange={(e)=>setFilterKey(e.target.value)} />

        </label>
    </div>
  )
}
