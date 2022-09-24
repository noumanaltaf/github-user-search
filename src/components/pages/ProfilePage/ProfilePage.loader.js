import { searchUser, fetchUserRepos } from '../../../api/users';

export async function loader({ params }) {
  const userResponse = await searchUser(params.username);
  const reposResponse = await fetchUserRepos(params.username);
  
  return { userInfo: userResponse, repos: reposResponse }
}