import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import About from './components/About/About.jsx';
import ErrorPage from './ErrorPage.jsx';
import Service from './components/Services/Service.jsx'
import Product from './components/Products/Product.jsx'
import ExplorePage from './components/Explore/ExplorePage.jsx';
import New from './New/New.jsx';


import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sidebar from './components/Explore/Sidebar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/services",
    element:<Service/>
  },
  {
    path:"/product",
    element:<Product/>
  },
  {
    path:"/explore",
    element:<ExplorePage/>
  },{
    path:"/try",
    element:<New/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Auth0Provider
    domain="" //key here
    clientId="" //key here
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
   >
  <RouterProvider router={router} />
  </Auth0Provider>
  </React.StrictMode>
)
