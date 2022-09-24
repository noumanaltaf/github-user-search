import React from 'react';
import { Icon, SearchIcon, SearchContainer, SearchInput } from './Search.styled';
import PersonSvg from '../../assets/svg/person.svg';
import SearchSvg from '../../assets/svg/search.svg';

const Search = (props) => {
  const { searchOnClick, ...restInputProps } = props

  return (
    <SearchContainer>
      <Icon src={PersonSvg} alt='user' />
      <SearchInput {...restInputProps} />
      <SearchIcon src={SearchSvg} alt='search' onClick={searchOnClick} />
    </SearchContainer>
  );
};

export default React.memo(Search);