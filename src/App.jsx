import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import store from "./Store/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Watch_page from "./pages/Watch_page";
import Main_page from "./pages/Main_page";
import IntroPage from "./pages/IntroPage";
import React_project from "./pages/React_project";
import Fullstack from "./pages/Fullstack";
import Figma from "./pages/Figma";
import Bootstrap from "./pages/Bootstrap";
import Vanilla_js from "./pages/Vanilla_js";
import Mega_project from "./pages/Mega_project";
import Forms from "./pages/Forms";
import Components from "./pages/Components";
import Video_page from "./pages/Video_page";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main_page />,
    children: [
      {
        path: "/projects_preview",
        element: <Home />,
      },
      {
        path: "/",
        element: <IntroPage />,
      },
      {
        path: "watch",
        element: <Watch_page />,
      },
      {
        path: "react_projects",
        element: <React_project />,
      },
      {
        path: "bootstrap_projects",
        element: <Bootstrap />,
      },
      {
        path: "javascript_projects",
        element: <Vanilla_js />,
      },
      {
        path: "mega_projects",
        element: <Mega_project />,
      },
      {
        path: "fullstack_projects",
        element: <Fullstack />,
      },
      {
        path: "figma_design",
        element: <Figma />,
      },
      {
        path: "forms",
        element: <Forms />,
      },
      {
        path: "components",
        element: <Components />,
      },
      {
        path: "video",
        element: <Video_page />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
