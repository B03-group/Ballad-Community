import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import detailLoader from '../loaders/detailLoader';
import Board from '../pages/Board';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Update from '../pages/Update';
import Write from '../pages/Write';

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
        path: 'update/postId',
        element: <Update />
      }
    ]
  }
]);
export default Router;
