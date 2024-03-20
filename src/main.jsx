import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About.jsx';
import Service from './Components/Service.jsx';
import Pricing from './Components/Pricing.jsx';
import Contact from './Components/Contact.jsx';
import Home from './Components/Home.jsx';
import Users from './Components/Users.jsx';
import UserDetails from './Components/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children: [
      {
        path: "/service",
        element:<Service></Service>
      },
      {
        path: "/about",
        element:<About></About>
      },
      {
        path: "/pricing",
        element:<Pricing></Pricing>
      },
      {
        path: "/contact",
        element:<Contact></Contact>
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element : <Users></Users>
      },
      {
        path: "/user-details/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element : <UserDetails></UserDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
