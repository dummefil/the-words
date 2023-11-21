import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import store from "./store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const root = document.getElementById('root');

const router = createBrowserRouter([
    {
        path: "*",
        element: <App/>,
    }
]);

export const AppRouter = () => <RouterProvider router={router} />

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
      <Provider store={store}>
          <AppRouter />
      </Provider>
  </React.StrictMode>,
)
