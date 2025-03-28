import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import Dashboard from './pages/Dashboard.jsx';
import Inicio from './pages/Inicio.jsx';
import Root from './routes/Root.jsx';
import DashboardLayout from './routes/DashboardLayout.jsx';
import Calendario from './components/calendario/calendario.jsx';


//instanciando el router
const router = createBrowserRouter([
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Inicio />
      },
      {
        path: "/Dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/Dashboard",
            element: <Calendario />
          }          
        ]
      }
    ]
  },

  

]
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
