import React, { Component } from "react";

export default function Social() {
  return (
    <div class="social-media p-20 bg-white rad-10 p-relative">
      <h2 class="mt-0 mb-25">Social Media Stats</h2>
      <div class="box twitter p-15 p-relative mb-10 between-flex">
        <i class="fa-brands fa-twitter fa-2x c-white h-full center-flex"></i>
        <span>90K Followers</span>
        <a class="fs-13 c-white btn-shape" href="#">
          Follow
        </a>
      </div>
      <div class="box facebook p-15 p-relative mb-10 between-flex">
        <i class="fa-brands fa-facebook-f fa-2x c-white h-full center-flex"></i>
        <span>2M Like</span>
        <a class="fs-13 c-white btn-shape" href="#">
          Like
        </a>
      </div>
      <div class="box youtube p-15 p-relative mb-10 between-flex">
        <i class="fa-brands fa-youtube fa-2x c-white h-full center-flex"></i>
        <span>1M Subs</span>
        <a class="fs-13 c-white btn-shape" href="#">
          Subscribe
        </a>
      </div>
      <div class="box linkedin p-15 p-relative mb-10 between-flex">
        <i class="fa-brands fa-linkedin fa-2x c-white h-full center-flex"></i>
        <span>70K Followers</span>
        <a class="fs-13 c-white btn-shape" href="#">
          Follow
        </a>
      </div>
    </div>
  );
}
