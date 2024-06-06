import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import detailLoader from '../loaders/detailLoader';
import Board from '../pages/Board';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Update from '../pages/Update';
import Write from '../pages/Write';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/board/:category',
        element: <Board />
      },
      {
        path: '/board/:category/:postId',
        element: <Detail />,
        loader: async ({ params }) => detailLoader(params.postId)
      },
      {
        path: '/write',
        element: <Write />
      },
      {
        path: '/update/:postId',
        element: <Update />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
]);

export default Router;
