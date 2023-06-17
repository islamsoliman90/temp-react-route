import { Outlet } from "react-router-dom";
import { AiFillAlert, AiFillAppstore, AiFillBuild } from "react-icons/ai";
import { BsFillDiagram3Fill } from "react-icons/bs";
import { FaDiscourse, FaUserFriends, FaRegPaperPlane } from "react-icons/fa";
export default function Layout() {
  return (
    <div class="page d-flex">
      <div class="sidebar bg-white p-20 p-relative">
        <h3 class="p-relative txt-c mt-0">Soliman</h3>
        <ul>
          <li>
            <a
              class="active d-flex align-center fs-14 c-black rad-6 p-10"
              href="index.html"
            >
              <AiFillAlert />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              href="settings.html"
            >
              <i class="fa-solid fa-gear fa-fw"></i>
              <AiFillAppstore />
              <span>Settings</span>
            </a>
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
      <Outlet />
    </div>
  );
}
