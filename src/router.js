import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ProfilePage from './components/pages/ProfilePage';
import { loader as profileLoader } from './components/pages/ProfilePage/ProfilePage.loader'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "user/:username",
    element: <ProfilePage />,
    loader: profileLoader
  },
]);

export default router;