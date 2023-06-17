import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./framework.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
} from "react-router-dom";
import Home from "./pages/home";
import Sitting from "./pages/sitting";
import Layout from "./compoments/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="sitting" element={<Sitting />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
