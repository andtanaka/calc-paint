import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <RootLayout />,
  //   children: [
  //     { index: true, element: <HomePage /> },
  //     { path: 'home', element: <HomePage /> },
  //   ],
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
