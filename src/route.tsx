import { createBrowserRouter } from "react-router-dom";
import ErrorPage from './component/errorpage'
import Login from './component/Login'
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
  ]);


  export default router