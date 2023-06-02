import Main from 'layout/Main';
import About from 'pages/About';
import Home from 'pages/Home/Home';
import Media from 'pages/media/Media';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/media',
        element: <Media />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
