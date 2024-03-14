import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'home', element: <HomePage /> },
      { path: 'contato', element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
