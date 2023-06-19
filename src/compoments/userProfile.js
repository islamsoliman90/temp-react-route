import React from "react";
import {Link} from "react-router-dom"
function Userprofile() {
  return (
    <div class="welcome bg-white rad-10 txt-c-mobile block-mobile">
      <div class="intro p-20 d-flex space-between bg-eee">
        <div>
          <h2 class="m-0">Welcome</h2>
          <p class="c-grey mt-5">Soliman</p>
        </div>
        <img class="hide-mobile" src="imgs/welcome.png" alt="" />
      </div>
      <img src="imgs/avatar.png" alt="" class="avatar" />
      <div class="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
        <div>
          Islam Soliman
          <span class="d-block c-grey fs-14 mt-10">Developer</span>
        </div>
        <div>
          80 <span class="d-block c-grey fs-14 mt-10">Projects</span>
        </div>
        <div>
          $8500 <span class="d-block c-grey fs-14 mt-10">Earned</span>
        </div>
      </div>
      <Link
        to="profile"
        class="visit d-block fs-14 bg-blue c-white w-fit btn-shape"
      >
        Profile
      </Link>
    </div>
  );
}

export default Userprofile;
