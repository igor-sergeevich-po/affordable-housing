import React from 'react';
import './filters.css';

export const Filters = () => {
  return (
      <div className='filters__container' >
          
        <div className='filters__main-filters'>
          <button className='filter-button'>новые</button>
          <button className='filter-button'>просмотренные</button>
          <button className='filter-button'>скидки</button>
          <button className='filter-button'>подорожали</button>
          <button className='filter-button'>дешёвые</button>
          <button className='filter-button'>дорогие</button>
          <button className='filter-button'>West Cameron</button>
          <button className='filter-button'>New Angelineburgh</button>

          <button className='filter-button'>Hoegerstad</button>


        </div>

        <div className='price-filter__wrapper'>
          <h5 className='price-filter__title'>Цена:</h5>
          <input className='price-input' type='number' placeholder='от 0 Р.' />
          <input className='price-input' type='number' placeholder='до _ Р.' />
          <button className='filter-button'>показать</button>
        </div>

      </div>
  )
}
