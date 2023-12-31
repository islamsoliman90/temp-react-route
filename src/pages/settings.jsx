import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useGlobalContext } from "../context";
import Header from "../compoments/header";
import { FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Sittings() {
  const [, setActivePage] = useOutletContext();
  setActivePage((e) => (e = "sitting"));
  let { search, toggleHandler } = useGlobalContext();
  console.log(search);
  return (
    <div class="page d-flex">
      <div class="content w-full">
        <Header header="Setting" />
        <div class="settings-page m-20 d-grid gap-20">
          <div class="p-20 bg-white rad-10">
            <h2 class="mt-0 mb-10">Site Control</h2>
            <p class="mt-0 mb-20 c-grey fs-15">
              Control The Website If There Is Maintenance
            </p>
            <div class="mb-15 between-flex">
              <div>
                <span>Website Control</span>
                <p class="c-grey mt-5 mb-0 fs-13">
                  Open/Close Website And Type The Reason
                </p>
              </div>
              <div>
                <label>
                  <input
                    class="toggle-checkbox"
                    type="checkbox"
                    onClick={toggleHandler}
                    checked={search}
                  />
                  <div class="toggle-switch"></div>
                </label>
              </div>
            </div>
            <textarea
              class="close-message p-10 rad-6 d-block w-full"
              placeholder="Close Message Content"
            ></textarea>
          </div>

          <div class="p-20 bg-white rad-10">
            <h2 class="mt-0 mb-10">General Info</h2>
            <p class="mt-0 mb-20 c-grey fs-15">
              General Information About Your Account
            </p>
            <div class="mb-15">
              <label class="fs-14 c-grey d-block mb-10" for="first">
                First Name
              </label>
              <input
                class="b-none border-ccc p-10 rad-6 d-block w-full"
                type="text"
                id="first"
                placeholder="First Name"
              />
            </div>
            <div class="mb-15">
              <label class="fs-14 c-grey d-block mb-5" for="last">
                Last Name
              </label>
              <input
                class="b-none border-ccc p-10 rad-6 d-block w-full"
                id="last"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label class="fs-14 c-grey d-block mb-5" for="email">
                Email
              </label>
              <input
                class="email b-none border-ccc p-10 rad-6 w-full mr-10"
                id="email"
                type="email"
                value="o@nn.sa"
                disabled
              />
              <a class="c-blue" href="#">
                Change
              </a>
            </div>
          </div>

          <div class="p-20 bg-white rad-10">
            <h2 class="mt-0 mb-10">Security Info</h2>
            <p class="mt-0 mb-20 c-grey fs-15">
              Security Information About Your Account
            </p>
            <div class="sec-box mb-15 between-flex">
              <div>
                <span>Password</span>
                <p class="c-grey mt-5 mb-0 fs-13">Last Change On 25/10/2021</p>
              </div>
              <a class="button bg-blue c-white btn-shape" href="#">
                Change
              </a>
            </div>
            <div class="sec-box mb-15 between-flex">
              <div>
                <span>Two-Factor Authentication</span>
                <p class="c-grey mt-5 mb-0 fs-13">Enable/Disable The Feature</p>
              </div>
              <label>
                <input class="toggle-checkbox" type="checkbox" />
                <div class="toggle-switch"></div>
              </label>
            </div>
            <div class="sec-box between-flex">
              <div>
                <span>Devices</span>
                <p class="c-grey mt-5 mb-0 fs-13">
                  Check The Login Devices List
                </p>
              </div>
              <a class="bg-eee c-black btn-shape" href="#">
                Devices
              </a>
            </div>
          </div>

          <div class="social-boxes p-20 bg-white rad-10">
            <h2 class="mt-0 mb-10">Social Info</h2>
            <p class="mt-0 mb-20 c-grey fs-15">Social Media Information</p>
            <div class="d-flex align-center mb-15">
              <FaTwitter />
              <input
                class="w-full"
                type="text"
                placeholder="Twitter Username"
              />
            </div>
            <div class="d-flex align-center mb-15">
              <FaFacebook />
              <input
                class="w-full"
                type="text"
                placeholder="Facebook Username"
              />
            </div>
            <div class="d-flex align-center mb-15">
              <FaLinkedin />
              <input
                class="w-full"
                type="text"
                placeholder="Linkedin Username"
              />
            </div>
            <div class="d-flex align-center">
              <FaYoutube />
              <input
                class="w-full"
                type="text"
                placeholder="Youtube Username"
              />
            </div>
          </div>

          <div class="widgets-control p-20 bg-white rad-10">
            <h2 class="mt-0 mb-10">Widgets Control</h2>
            <p class="mt-0 mb-20 c-grey fs-15">Show/Hide Widgets</p>
            <div class="control d-flex align-center mb-15">
              <input type="checkbox" id="one" />
              <label for="one">Quick Draft</label>
            </div>
            <div class="control d-flex align-center mb-15">
              <input type="checkbox" id="two" />
              <label for="two">Yearly Targets</label>
            </div>
            <div class="control d-flex align-center mb-15">
              <input type="checkbox" id="three" />
              <label for="three">Tickets Statistics</label>
            </div>
            <div class="control d-flex align-center mb-15">
              <input type="checkbox" id="four" />
              <label for="four">Latest News</label>
            </div>
            <div class="control d-flex align-center mb-15">
              <input type="checkbox" id="five" />
              <label for="five">Latest Tasks</label>
            </div>
            <div class="control d-flex align-center mb-15">
              <input type="checkbox" id="six" />
              <label for="six">Top Search Items</label>
            </div>
          </div>

          <div class="backup-control p-20 bg-white rad-10">
            <h2 class="mt-0 mb-10">Backup Manager</h2>
            <p class="mt-0 mb-20 c-grey fs-15">
              Control Backup Time And Location
            </p>
            <div class="date d-flex align-center mb-15">
              <input type="radio" name="time" id="daily" />
              <label for="daily">Daily</label>
            </div>
            <div class="date d-flex align-center mb-15">
              <input type="radio" name="time" id="weekly" />
              <label for="weekly">Weekly</label>
            </div>
            <div class="date d-flex align-center mb-15">
              <input type="radio" name="time" id="monthly" />
              <label for="monthly">Monthly</label>
            </div>
            <div class="servers d-flex align-center txt-c">
              <input type="radio" name="servers" id="server-one" />
              <div class="server mb-15 rad-10 w-full">
                <label class="d-block m-15" for="server-one">
                  <i class="fa-solid fa-server d-block mb-10"></i>
                  Megaman
                </label>
              </div>
              <input type="radio" name="servers" id="server-two" />
              <div class="server mb-15 rad-10 w-full">
                <label class="d-block m-15" for="server-two">
                  <i class="fa-solid fa-server d-block mb-10"></i>
                  Zero
                </label>
              </div>
              <input type="radio" name="servers" id="server-three" />
              <div class="server mb-15 rad-10 w-full">
                <label class="d-block m-15" for="server-three">
                  <i class="fa-solid fa-server d-block mb-10"></i>
                  Sigma
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
