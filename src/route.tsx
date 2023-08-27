import { createBrowserRouter } from "react-router-dom";
import ErrorPage from './component/errorpage'
import Login from './component/Login'
import Dashboard from './component/dashboard'
const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello Vincent!</div>,
      errorElement:<ErrorPage/>
    },
    {
        path: "/login",
        element: <Login/>,
        errorElement:<ErrorPage/>
      },
      {
        path: "/dashboard/app",
        element: <Dashboard/>,
        errorElement:<ErrorPage/>
      },
  ]);


  export default router