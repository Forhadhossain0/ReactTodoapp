import ReactDOM from 'react-dom/client'
import React from 'react';
import './index.css'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);