import React from 'react';
import Repository from '../../Repository';
import { BackIcon, ContainerFluidStyled, ProfileInfoSection, ProfilePicture, RepositoriesList } from './ProfilePage.styled';
import BackSvg from '../../../assets/svg/back.svg';
import { Link, useLoaderData } from 'react-router-dom';

const ProfilePage = () => {
  const { userInfo, repos } = useLoaderData();

  return (
    <>
      <Link to={`/`}>
        <BackIcon src={BackSvg} />
      </Link>
      <ContainerFluidStyled>
        <ProfileInfoSection>
          <ProfilePicture src={userInfo?.avatar_url} />
          <h2>{userInfo?.name}</h2>
        </ProfileInfoSection>
        <section>
          <p>Total Repositories: <strong>{userInfo?.public_repos}</strong></p>
          <RepositoriesList>
            {repos && repos?.map((repo) => (<Repository
              name={repo.full_name}
              description={repo.description} />))}
          </RepositoriesList>
        </section>
      </ContainerFluidStyled>
    </>
  );
};

export default ProfilePage;