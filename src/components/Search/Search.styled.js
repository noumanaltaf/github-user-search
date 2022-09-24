import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 40px;
  border-radius: 40px;
  box-shadow: 0 6px 8px rgb(0 0 0 / 15%);
  background: #fff;
  transition: all 0.3s ease;

  &:focus-within {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  width: calc(100% - 85px);
  height: 30px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px;
`;

export const SearchIcon = styled(Icon)`
  cursor: pointer;
`