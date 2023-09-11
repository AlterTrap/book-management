import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ExampleIndex from './components/examples/Index';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>Hello world!</div> },
    {
      path: '/examples',
      element: <ExampleIndex />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
