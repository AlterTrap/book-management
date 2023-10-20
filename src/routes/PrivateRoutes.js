import { Route, Navigate, Routes } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import BookIndex from '../components/books/Index';
import BookCreate from '../components/books/Create';
import BookUpdate from '../components/books/Update';
import BookDetail from '../components/books/Detail';

function PrivateRoutes() {
  const user = useAuth();
  console.log('🚀 ~ file: PrivateRoutes.js:10 ~ PrivateRoutes ~ user:', user);

  const routes = [
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
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact || false}
          element={(props) =>
            user ? <route.element {...props} /> : <Navigate to='/login' />
          }
        />
      ))}
    </Routes>
  );
}

export default PrivateRoutes;
