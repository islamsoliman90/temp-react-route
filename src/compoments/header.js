import React, { Component } from "react";
import { BiBell } from "react-icons/bi";
export default function Header(props) {
  return (
    <>
      <div class="head bg-white p-15 between-flex">
        <div class="search p-relative">
          <input class="p-10" type="search" placeholder="Type A Keyword" />
        </div>
        <div class="icons d-flex align-center">
          <span class="notification p-relative">
            <BiBell style={{ fontSize: "20px" }} />
          </span>
          <img src="imgs/avatar.png" alt="" />
        </div>
      </div>
      <h1 class="p-relative">{props.header}</h1>
    </>
  );
}
