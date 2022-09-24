import React from 'react';

import { RepositoryContainer, RepoName, RepoDescription } from './Repository.styled';

const Repository = (props) => {
  const { name, description } = props;

  return (
    <RepositoryContainer>
      <RepoName>{name}</RepoName>
      <RepoDescription>{description}</RepoDescription>
    </RepositoryContainer>
  );
};

export default Repository;