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
            <Link
              className={
                activePage == "profile"
                  ? "active d-flex align-center fs-14 c-black rad-6 p-10 "
                  : " d-flex align-center fs-14 c-black rad-6 p-10"}
              to="profile"
            >
              <AiFillBuild />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link
              className={
                activePage == "project"
                  ? "active d-flex align-center fs-14 c-black rad-6 p-10 "
                  : " d-flex align-center fs-14 c-black rad-6 p-10"}
              to="project"
            >
              <BsFillDiagram3Fill />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
                 className={
                  activePage == "courses"
                    ? "active d-flex align-center fs-14 c-black rad-6 p-10 "
                    : " d-flex align-center fs-14 c-black rad-6 p-10"}
                to="courses"
            >
              <FaDiscourse />
              <span>Courses</span>
            </Link>
          </li>
          <li>
            <Link
                 className={
                  activePage == "friends"
                    ? "active d-flex align-center fs-14 c-black rad-6 p-10 "
                    : " d-flex align-center fs-14 c-black rad-6 p-10"}
                to="friends"
            >
              <FaUserFriends />
              <span>Friends</span>
            </Link>
          </li>
          <li>
            <Link
                className={
                  activePage == "files"
                    ? "active d-flex align-center fs-14 c-black rad-6 p-10 "
                    : " d-flex align-center fs-14 c-black rad-6 p-10"}
                to="files"
            >
              <AiFillAlert />
              <span>Files</span>
            </Link>
          </li>
          <li>
            <Link
                  className={
                    activePage == "plans"
                      ? "active d-flex align-center fs-14 c-black rad-6 p-10 "
                      : " d-flex align-center fs-14 c-black rad-6 p-10"}
                  to="plans"
            >
              <FaRegPaperPlane />

              <span>Plans</span>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet context={[activePage, setActivePage]} />
    </div>
  );
}
