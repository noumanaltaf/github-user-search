import styled from 'styled-components';
import { ContainerFluid } from '../../common.styled';
import theme from '../../../theme'

export const ContainerFluidStyled = styled(ContainerFluid)`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.breakpoints.up('largeScreen')}{
    display: grid;
    grid-template-columns: 20% 80%;
    align-items: start;
  }
`;
export const ProfileInfoSection = styled.section`
text-align: center;

${theme.breakpoints.up('largeScreen')}{
  text-align: start;
}

`;
export const ProfilePicture = styled.img`
  border-radius: 50%;
  line-height: 1;
  vertical-align: middle;
  background-color: rgba(255,255,255,0.1);
  flex-shrink: 0;
  box-shadow: 0 0 0 1px rgb(240 246 252 / 10%);
  border: 1px solid #30363d;
  height: 260px;
  width: 260px;
`;

export const RepositoriesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${theme.breakpoints.up('desktop')}{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
export const BackIcon = styled.img`
  position: fixed;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
`;