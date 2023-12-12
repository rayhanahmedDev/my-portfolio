import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Portfolio from "../Pages/Portfolio/Portfolio";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        },
        {
          path : 'portfolio',
          element :<Portfolio></Portfolio>
        }
      ]
    },
  ]);
  export default router;