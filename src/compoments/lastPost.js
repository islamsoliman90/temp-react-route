import React, { Component } from "react";
export default function Lastpost() {
  return (
    <div class="latest-post p-20 bg-white rad-10 p-relative">
      <h2 class="mt-0 mb-25">Latest Post</h2>
      <div class="top d-flex align-center">
        <img class="avatar mr-15" src="imgs/avatar.png" alt="" />
        <div class="info">
          <span class="d-block mb-5 fw-bold">Islam Soliman</span>
          <span class="c-grey">About 3 Hours Ago</span>
        </div>
      </div>
      <div class="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20">
        You can fool all of the people some of the time, and some of the people
        all of the time, but you can't fool all of the people all of the time.
      </div>
      <div class="post-stats between-flex c-grey">
        <div>
          <i class="fa-regular fa-heart"></i>
          <span>1.8K</span>
        </div>
        <div>
          <i class="fa-regular fa-comments"></i>
          <span>500</span>
        </div>
      </div>
    </div>
  );
}
