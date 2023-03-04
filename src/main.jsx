import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const myroutes = createMemoryRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myroutes} />
  </React.StrictMode>
)
