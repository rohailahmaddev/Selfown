import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Resumes } from "./pages/Resume";
import { ProjectsPage } from "./pages/Projects";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />, 
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/resume",
          element: <Resumes />,
        },
        {
          path: "/projects",
          element: <ProjectsPage />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
