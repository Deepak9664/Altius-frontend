import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import './index.css';
import App from './App';
import Body from './Components/Body';
import Form from './Components/Form';
import ContactForm from './Components/ContactForm';


const appRouter=createBrowserRouter([{
  path:"/",
  element:<App/>,
  // errorElement:<Error/>,
  children:[
    {
    path:"/",
    element:<Body/>
  },
  {
    path:"/appointment",
    element:<Form/>,
    
  },
  {
    path:"/contact",
    element:<ContactForm/>,
    
  },
]
  }
  ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={appRouter}/>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



