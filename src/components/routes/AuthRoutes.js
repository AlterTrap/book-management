import { Route, Navigate, Routes } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';
import BookIndex from '../books/Index';
import BookCreate from '../books/Create';
import BookUpdate from '../books/Update';
import BookDetail from '../books/Detail';

function AuthRoutes() {
  const { user } = useAuth();

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
      {routes.map((route, index) => {
        if (user) {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact || false}
              element={route.element}
            />
          );
        } else if (user === null) {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact || false}
              element={<Navigate to='/login' />}
            />
          );
        }
        return null;
      })}
    </Routes>
  );
}

export default AuthRoutes;
