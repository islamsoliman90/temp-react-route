import React, { Component } from "react";

export default function Latestupload() {
  return (
    <div class="latest-uploads p-20 bg-white rad-10">
      <h2 class="mt-0 mb-20">Latest Uploads</h2>
      <ul class="m-0">
        <li class="between-flex pb-10 mb-10">
          <div class="d-flex align-center">
            <img class="mr-10" src="imgs/pdf.svg" alt="" />
            <div>
              <span class="d-block">my-file.pdf</span>
              <span class="fs-15 c-grey">Soliman</span>
            </div>
          </div>
          <div class="bg-eee btn-shape fs-13">2.9mb</div>
        </li>
        <li class="between-flex pb-10 mb-10">
          <div class="d-flex align-center">
            <img class="mr-10" src="imgs/avi.svg" alt="" />
            <div>
              <span class="d-block">My-Video-File.avi</span>
              <span class="fs-15 c-grey">Admin</span>
            </div>
          </div>
          <div class="bg-eee btn-shape fs-13">4.9mb</div>
        </li>
        <li class="between-flex pb-10 mb-10">
          <div class="d-flex align-center">
            <img class="mr-10" src="imgs/psd.svg" alt="" />
            <div>
              <span class="d-block">My-Psd-File.pdf</span>
              <span class="fs-15 c-grey">Osama</span>
            </div>
          </div>
          <div class="bg-eee btn-shape fs-13">4.5mb</div>
        </li>
        <li class="between-flex pb-10 mb-10">
          <div class="d-flex align-center">
            <img class="mr-10" src="imgs/zip.svg" alt="" />
            <div>
              <span class="d-block">My-Zip-File.pdf</span>
              <span class="fs-15 c-grey">User</span>
            </div>
          </div>
          <div class="bg-eee btn-shape fs-13">8.9mb</div>
        </li>
        <li class="between-flex pb-10 mb-10">
          <div class="d-flex align-center">
            <img class="mr-10" src="imgs/dll.svg" alt="" />
            <div>
              <span class="d-block">My-DLL-File.pdf</span>
              <span class="fs-15 c-grey">Admin</span>
            </div>
          </div>
          <div class="bg-eee btn-shape fs-13">4.9mb</div>
        </li>
        <li class="between-flex">
          <div class="d-flex align-center">
            <img class="mr-10" src="imgs/eps.svg" alt="" />
            <div>
              <span class="d-block">My-Eps-File.pdf</span>
              <span class="fs-15 c-grey">Designer</span>
            </div>
          </div>
          <div class="bg-eee btn-shape fs-13">8.9mb</div>
        </li>
      </ul>
    </div>
  );
}
