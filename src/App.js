import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BookIndex from './components/books/Index';
import BookDelete from './components/books/delete';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>Hello world!</div> },
    {
      path: '/books',
      element: <BookIndex />,
    },
    {
      path: '/books/delete',
      element: <BookDelete />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
