import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Anda dapat sesuka hati mengganti createMemoryRouter menjadi BrowserRouter ataupun HashRouter tergantung kebutuhan anda
import { createMemoryRouter as createRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

// Setting routes URL
const myroutes = createRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myroutes} />
  </React.StrictMode>
)
