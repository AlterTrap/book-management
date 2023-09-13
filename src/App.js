import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BookIndex from './components/books/Index';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>Hello world!</div> },
    {
      path: '/books',
      element: <BookIndex />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
