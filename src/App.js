import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BookIndex from './components/books/Index';
import BookCreate from './components/books/Create';
import BookUpdate from './components/books/Update';
import BookDetail from './components/books/Detail';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>Hello world!</div> },
    {
      path: '/books',
      element: <BookIndex />,
    },
    {
      path: '/books/:id',
      element: <BookDetail />,
    },
    {
      path: '/books/create',
      element: <BookCreate />,
    },
    {
      path: `/books/update/:id`,
      element: <BookUpdate />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
