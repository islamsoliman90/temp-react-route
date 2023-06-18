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
import Sittings from "./pages/sittings";
import Profile from "./pages/profile";
import Project from "./pages/project";
import Courses from "./pages/courses.jsx";
import Friends from "./pages/friends";
import Files from "./pages/files";
import Plans from "./pages/plans";
import Layout from "./compoments/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="sitting" element={<Sittings />} />
      <Route path="profile" element={<Profile />} />
      <Route path="project" element={<Project />} />
      <Route path="courses" element={<Courses />} />
      <Route path="friends" element={<Friends />} />
      <Route path="files" element={<Files />} />
      <Route path="plans" element={<Plans />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
