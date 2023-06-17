import React, { Component } from "react";
export default function Tickets() {
  return (
    <div class="tickets p-20 bg-white rad-10">
      <h2 class="mt-0 mb-10">Tickets Statistics</h2>
      <p class="mt-0 mb-20 c-grey fs-15">Everything About Support Tickets</p>
      <div class="d-flex txt-c gap-20 f-wrap">
        <div class="box p-20 rad-10 fs-13 c-grey">
          <i class="fa-regular fa-rectangle-list fa-2x mb-10 c-orange"></i>
          <span class="d-block c-black fw-bold fs-25 mb-5">2500</span>
          Total
        </div>
        <div class="box p-20 rad-10 fs-13 c-grey">
          <i class="fa-solid fa-spinner fa-2x mb-10 c-blue"></i>
          <span class="d-block c-black fw-bold fs-25 mb-5">500</span>
          Pending
        </div>
        <div class="box p-20 rad-10 fs-13 c-grey">
          <i class="fa-regular fa-circle-check fa-2x mb-10 c-green"></i>
          <span class="d-block c-black fw-bold fs-25 mb-5">1900</span>
          Closed
        </div>
        <div class="box p-20 rad-10 fs-13 c-grey">
          <i class="fa-regular fa-rectangle-xmark fa-2x mb-10 c-red"></i>
          <span class="d-block c-black fw-bold fs-25 mb-5">100</span>
          Deleted
        </div>
      </div>
    </div>
  );
}
