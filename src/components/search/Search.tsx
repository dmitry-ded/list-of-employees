import React, { useCallback } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/searchSlice';
import debounce from 'lodash.debounce';
import "./search.css"


const Search: React.FC = () => {

  const dispatch = useDispatch();

  const updateSearchValue = useCallback(debounce((value: string) => {
    dispatch(setSearchValue(value));
    }, 1000),
    [],
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(e.target.value);
  }

  return (
    <div className="main-search">
      <IoSearchOutline className="icon-search"  />
      <input className="input-search" onChange={onChangeInput} type="text" placeholder='Поиск' />
    </div>
  )
}

export default Search
