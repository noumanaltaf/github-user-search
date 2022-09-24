

const BASE_URL = 'https://api.github.com/';

export const searchUser = (username) => {
  return fetch(`${BASE_URL}users/${username}`)
    .then((response) => response.json());
}
export const fetchUserRepos = (username) => {
  return fetch(`${BASE_URL}users/${username}/repos`)
    .then((response) => response.json());
}