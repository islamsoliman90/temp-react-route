import React, { Component } from "react";

export default function Searchitems() {
  return (
    <div class="search-items p-20 bg-white rad-10">
      <h2 class="mt-0 mb-20">Top Search Items</h2>
      <div class="items-head d-flex space-between c-grey mb-10">
        <div>Keyword</div>
        <div>Search Count</div>
      </div>
      <div class="items d-flex space-between pt-15 pb-15">
        <span>Programming</span>
        <span class="bg-eee fs-13 btn-shape">220</span>
      </div>
      <div class="items d-flex space-between pt-15 pb-15">
        <span>JavaScript</span>
        <span class="bg-eee btn-shape fs-13">180</span>
      </div>
      <div class="items d-flex space-between pt-15 pb-15">
        <span>PHP</span>
        <span class="bg-eee btn-shape fs-13">160</span>
      </div>
      <div class="items d-flex space-between pt-15 pb-15">
        <span>Code</span>
        <span class="bg-eee btn-shape fs-13">145</span>
      </div>
      <div class="items d-flex space-between pt-15 pb-15">
        <span>Design</span>
        <span class="bg-eee btn-shape fs-13">110</span>
      </div>
      <div class="items d-flex space-between pt-15 pb-15">
        <span>Logic</span>
        <span class="bg-eee btn-shape fs-13">95</span>
      </div>
    </div>
  );
}
