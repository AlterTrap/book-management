import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BookIndex from './components/books/Index';
import BookDelete from './components/books/delete';
import BookCreate from './components/books/create';
import BookUpdate from './components/books/update';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>Hello world!</div> },
    {
      path: '/books',
      element: <BookIndex />,
    },
    {
      path: '/books/create',
      element: <BookCreate />,
    },
    {
      path: '/books/delete',
      element: <BookDelete />,
    },
    {
      path: `/books/update/`,
      element: <BookUpdate />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
