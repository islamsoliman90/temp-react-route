import { Outlet } from "react-router-dom";
import { AiFillAlert, AiFillAppstore, AiFillBuild } from "react-icons/ai";
import { BsFillDiagram3Fill } from "react-icons/bs";
import { FaDiscourse, FaUserFriends, FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
export default function Layout() {
  const [activePage, setActivePage] = React.useState("dashboard");
  return (
    <div class="page d-flex">
      <div class="sidebar bg-white p-20 p-relative">
        <h3 class="p-relative txt-c mt-0">Soliman</h3>
        <ul>
          <li>
            <Link
              className={
                activePage == "dashboard"
                  ? "active d-flex align-center fs-14 c-black rad-6 p-10"
                  : " d-flex align-center fs-14 c-black rad-6 p-10"
              }
              to="/"
            >
              <AiFillAlert />
              <span>Dashboard</span>
            </Link>
          </li>
          <li >
            <Link
              className={
                activePage == "sitting"
                  ? "active d-flex align-center fs-14 c-black rad-6 p-10 "
                  : " d-flex align-center fs-14 c-black rad-6 p-10"
              }
              to="sitting"
            >
              <AiFillAppstore />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <a
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              href="profile.html"
            >
              <AiFillBuild />
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              href="projects.html"
            >
              <i class="fa-solid fa-diagram-project fa-fw"></i>
              <BsFillDiagram3Fill />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              href="courses.html"
            >
              <FaDiscourse />
              <span>Courses</span>
            </a>
          </li>
          <li>
            <a
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              href="friends.html"
            >
              <FaUserFriends />
              <span>Friends</span>
            </a>
          </li>
          <li>
            <a
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              href="files.html"
            >
              <AiFillAlert />
              <span>Files</span>
            </a>
          </li>
          <li>
            <a
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              href="plans.html"
            >
              <FaRegPaperPlane />

              <span>Plans</span>
            </a>
          </li>
        </ul>
      </div>
      <Outlet context={[activePage, setActivePage]} />
    </div>
  );
}
