import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import OrderReview from './Components/OrderReview/OrderReview';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import NewProduct from './Components/NewProduct/newProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch ('tshart.json')
      },
      {
        path:'review',
        element:<OrderReview></OrderReview>
      },
      {
        path:'/NewProduct',
        element:<NewProduct></NewProduct>
      }
      ,
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }

    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

{/*  */}
