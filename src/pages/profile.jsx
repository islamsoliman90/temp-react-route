import { useOutletContext } from "react-router-dom";
function Profile() {
  const [, setActivePage] = useOutletContext();
  setActivePage((e) => (e = "profile"));
  return (
    <div class="page d-flex">
      <div class="content w-full">
        <div class="head bg-white p-15 between-flex">
          <div class="search p-relative">
            <input class="p-10" type="search" placeholder="Type A Keyword" />
          </div>
          <div class="icons d-flex align-center">
            <span class="notification p-relative">
              <i class="fa-regular fa-bell fa-lg"></i>
            </span>
            <img src="imgs/avatar.png" alt="" />
          </div>
        </div>
        <h1 class="p-relative">Profile</h1>
        <div class="profile-page m-20">
          <div class="overview bg-white rad-10 d-flex align-center">
            <div class="avatar-box txt-c p-20">
              <img class="rad-half mb-10" src="imgs/avatar.png" alt="" />
              <h3 class="m-0">Islam Soliman</h3>
              <p class="c-grey mt-10">Level 20</p>
              <div class="level rad-6 bg-eee p-relative">
                <span style={{ width: "70%" }}></span>
              </div>
              <div class="rating mt-10 mb-10">
                <i class="fa-solid fa-star c-orange fs-13"></i>
                <i class="fa-solid fa-star c-orange fs-13"></i>
                <i class="fa-solid fa-star c-orange fs-13"></i>
                <i class="fa-solid fa-star c-orange fs-13"></i>
                <i class="fa-solid fa-star c-orange fs-13"></i>
              </div>
              <p class="c-grey m-0 fs-13">550 Rating</p>
            </div>
            <div class="info-box w-full txt-c-mobile">
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey fs-15 m-0 w-full">General Information</h4>
                <div class="fs-14">
                  <span class="c-grey">Full Name</span>
                  <span>Osama Mohamed</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Gender:</span>
                  <span>Male</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Country:</span>
                  <span>Egypt</span>
                </div>
                <div class="fs-14">
                  <label>
                    <input class="toggle-checkbox" type="checkbox" />
                    <div class="toggle-switch"></div>
                  </label>
                </div>
              </div>
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey w-full fs-15 m-0">Personal Information</h4>
                <div class="fs-14">
                  <span class="c-grey">Email:</span>
                  <span>o@nn.sa</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Phone:</span>
                  <span>019123456789</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Date Of Birth:</span>
                  <span>25/10/1982</span>
                </div>
                <div class="fs-14">
                  <label>
                    <input class="toggle-checkbox" type="checkbox" />
                    <div class="toggle-switch"></div>
                  </label>
                </div>
              </div>
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey w-full fs-15 m-0">Job Information</h4>
                <div class="fs-14">
                  <span class="c-grey">Title:</span>
                  <span>Full Stack Developer</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Programming Language:</span>
                  <span>Python</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Years Of Experience:</span>
                  <span>15+</span>
                </div>
                <div class="fs-14">
                  <label>
                    <input class="toggle-checkbox" type="checkbox" />
                    <div class="toggle-switch"></div>
                  </label>
                </div>
              </div>
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey w-full fs-15 m-0">Billing Information</h4>
                <div class="fs-14">
                  <span class="c-grey">Payment Method:</span>
                  <span>Paypal</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Email:</span>
                  <span>email@website.com</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Subscription:</span>
                  <span>Monthly</span>
                </div>
                <div class="fs-14">
                  <label>
                    <input class="toggle-checkbox" type="checkbox" />
                    <div class="toggle-switch"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="other-data d-flex gap-20">
            <div class="skills-card p-20 bg-white rad-10 mt-20">
              <h2 class="mt-0 mb-10">My Skills</h2>
              <p class="mt-0 mb-20 c-grey fs-15">Complete Skills List</p>
              <ul class="m-0 txt-c-mobile">
                <li>
                  <span>HTML</span>
                  <span>Pugjs</span>
                  <span>HAML</span>
                </li>
                <li>
                  <span>CSS</span>
                  <span>SASS</span>
                  <span>Stylus</span>
                </li>
                <li>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                </li>
                <li>
                  <span>Vuejs</span>
                  <span>Reactjs</span>
                </li>
                <li>
                  <span>Jest</span>
                  <span>Jasmine</span>
                </li>
                <li>
                  <span>PHP</span>
                  <span>Laravel</span>
                </li>
                <li>
                  <span>Python</span>
                  <span>Django</span>
                </li>
              </ul>
            </div>
            <div class="activities p-20 bg-white rad-10 mt-20">
              <h2 class="mt-0 mb-10">Latest Activities</h2>
              <p class="mt-0 mb-20 c-grey fs-15">
                Latest Activities Done By The User
              </p>
              <div class="activity d-flex align-center txt-c-mobile">
                <img src="imgs/activity-01.png" alt="" />
                <div class="info">
                  <span class="d-block mb-10">Store</span>
                  <span class="c-grey">Bought The Mastering Python Course</span>
                </div>
                <div class="date">
                  <span class="d-block mb-10">18:10</span>
                  <span class="c-grey">Yesterday</span>
                </div>
              </div>
              <div class="activity d-flex align-center txt-c-mobile">
                <img src="imgs/activity-02.png" alt="" />
                <div class="info">
                  <span class="d-block mb-10">Academy</span>
                  <span class="c-grey">Got The PHP Certificate</span>
                </div>
                <div class="date">
                  <span class="d-block mb-10">16:05</span>
                  <span class="c-grey">Yesterday</span>
                </div>
              </div>
              <div class="activity d-flex align-center txt-c-mobile">
                <img src="imgs/activity-03.png" alt="" />
                <div class="info">
                  <span class="d-block mb-10">Badges</span>
                  <span class="c-grey">Unlocked The 10 Skills Badge</span>
                </div>
                <div class="date">
                  <span class="d-block mb-10">18:05</span>
                  <span class="c-grey">Yesterday</span>
                </div>
              </div>
              <div class="activity d-flex align-center txt-c-mobile">
                <img src="imgs/activity-01.png" alt="" />
                <div class="info">
                  <span class="d-block mb-10">Store</span>
                  <span class="c-grey">Bought The Typescript Course</span>
                </div>
                <div class="date">
                  <span class="d-block mb-10">12:05</span>
                  <span class="c-grey">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
