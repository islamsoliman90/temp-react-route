import React, { Component } from "react";

export default function Lastproject() {
  return (
    <div class="last-project p-20 bg-white rad-10 p-relative">
      <h2 class="mt-0 mb-20">Last Project Progress</h2>
      <ul class="m-0 p-relative">
        <li class="mt-25 d-flex align-center done">Got The Project</li>
        <li class="mt-25 d-flex align-center done">Started The Project</li>
        <li class="mt-25 d-flex align-center done">
          The Project About To Finish
        </li>
        <li class="mt-25 d-flex align-center current">Test The Project</li>
        <li class="mt-25 d-flex align-center">
          Finish The Project & Get Money
        </li>
      </ul>
      <img class="launch-icon hide-mobile" src="imgs/project.png" alt="" />
    </div>
  );
}
