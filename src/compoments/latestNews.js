import React, { Component } from "react";

export default function Latestnews() {
  return (
    <div class="latest-news p-20 bg-white rad-10 txt-c-mobile">
      <h2 class="mt-0 mb-20">Latest News</h2>
      <div class="news-row d-flex align-center">
        <img src="imgs/news-01.png" alt="" />
        <div class="info">
          <h3>Created SASS Section</h3>
          <p class="m-0 fs-14 c-grey">New SASS Examples & Tutorials</p>
        </div>
        <div class="btn-shape bg-eee fs-13 label">3 Days Ago</div>
      </div>
      <div class="news-row d-flex align-center">
        <img src="imgs/news-02.png" alt="" />
        <div class="info">
          <h3>Changed The Design</h3>
          <p class="m-0 fs-14 c-grey">A Brand New Website Design</p>
        </div>
        <div class="btn-shape bg-eee fs-13 label">5 Days Ago</div>
      </div>
      <div class="news-row d-flex align-center">
        <img src="imgs/news-03.png" alt="" />
        <div class="info">
          <h3>Team Increased</h3>
          <p class="m-0 fs-14 c-grey">3 Developers Joined The Team</p>
        </div>
        <div class="btn-shape bg-eee fs-13 label">7 Days Ago</div>
      </div>
      <div class="news-row d-flex align-center">
        <img src="imgs/news-04.png" alt="" />
        <div class="info">
          <h3>Added Payment Gateway</h3>
          <p class="m-0 fs-14 c-grey">Many New Payment Gateways Added</p>
        </div>
        <div class="btn-shape bg-eee fs-13 label">9 Days Ago</div>
      </div>
    </div>
  );
}
