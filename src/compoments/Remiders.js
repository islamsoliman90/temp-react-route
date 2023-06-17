import React, { Component } from "react";

export default function Reminder() {
  return (
    <div class="reminders p-20 bg-white rad-10 p-relative">
      <h2 class="mt-0 mb-25">Reminders</h2>
      <ul class="m-0">
        <li class="d-flex align-center mt-15">
          <span class="key bg-blue mr-15 d-block rad-half"></span>
          <div class="pl-15 blue">
            <p class="fs-14 fw-bold mt-0 mb-5">Check My Tasks List</p>
            <span class="fs-13 c-grey">28/09/2022 - 12:00am</span>
          </div>
        </li>
        <li class="d-flex align-center mt-15">
          <span class="key bg-green mr-15 d-block rad-half"></span>
          <div class="pl-15 green">
            <p class="fs-14 fw-bold mt-0 mb-5">Check My Projects</p>
            <span class="fs-13 c-grey">26/10/2022 - 12:00am</span>
          </div>
        </li>
        <li class="d-flex align-center mt-15">
          <span class="key bg-orange mr-15 d-block rad-half"></span>
          <div class="pl-15 orange">
            <p class="fs-14 fw-bold mt-0 mb-5">Call All My Clients</p>
            <span class="fs-13 c-grey">05/11/2022 - 12:00am</span>
          </div>
        </li>
        <li class="d-flex align-center mt-15">
          <span class="key bg-red mr-15 d-block rad-half"></span>
          <div class="pl-15 red">
            <p class="fs-14 fw-bold mt-0 mb-5">
              Finish The Development Workshop
            </p>
            <span class="fs-13 c-grey">20/12/2022 - 12:00am</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
