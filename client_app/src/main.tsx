import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserDashboard from "./components/UserDashboard/UserDashboard.tsx";
import ErrorProvider from "./components/Error/ErrorProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user-dashboard",
    element: <UserDashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorProvider>
      <RouterProvider router={router}></RouterProvider>
    </ErrorProvider>
  </React.StrictMode>
);
