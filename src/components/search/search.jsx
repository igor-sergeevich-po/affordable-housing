import React from 'react';
import './search.css'

export const Search = ({searchKey, setSearchKey}) => {
  return (
    <div className='wrapperr'>
        <label className='label'>
          Поиск:
          <input id='searchInput' value={searchKey} className='search' type='text' placeholder='введите текст' onChange={(e)=>setSearchKey(e.target.value)} />

        </label>
    </div>
  )
}
