import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../Search';
import { ContainerFluidStyled } from './SearchPage.styled';

const SearchPage = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const redirectToProfilePage = useCallback(() => {
    if (userName) {
      navigate(`/user/${userName}`);
    }
  }, [userName, navigate]);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      redirectToProfilePage();
    }
  };

  return (
    <ContainerFluidStyled>
      <Search
        placeholder='username'
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
        searchOnClick={redirectToProfilePage} />
    </ContainerFluidStyled>
  );
};

export default SearchPage;