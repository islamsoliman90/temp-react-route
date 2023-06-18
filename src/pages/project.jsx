import { useOutletContext } from "react-router-dom"
function Project() {
    const [, setActivePage] = useOutletContext();
    setActivePage((e) => (e = "project"));
    return (<div class="content w-full">

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

        <h1 class="p-relative">Projects</h1>
        <div class="projects-page d-grid m-20 gap-20">
            <div class="project bg-white p-20 rad-6 p-relative">
                <span class="date fs-13 c-grey">15/10/2021</span>
                <h4 class="m-0">Soliman Dashboard</h4>
                <p class="c-grey mt-10 mb-10 fs-14">Soliman Dashboard Project Design And Programming And Hosting</p>
                <div class="team">
                    <a href="#"><img src="imgs/team-01.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-02.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-03.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-04.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-05.png" alt="" /></a>
                </div>
                <div class="do d-flex">
                    <span class="fs-13 rad-6 bg-eee">Programming</span>
                    <span class="fs-13 rad-6 bg-eee">Design</span>
                    <span class="fs-13 rad-6 bg-eee">Hosting</span>
                    <span class="fs-13 rad-6 bg-eee">Marketing</span>
                </div>
                <div class="info between-flex">
                    <div class="prog bg-eee">
                        <span class="bg-red" style={{ width: "50%" }}></span>
                    </div>
                    <div class="fs-14 c-grey">
                        <i class="fa-solid fa-dollar-sign"></i>
                        2500
                    </div>
                </div>
            </div>
            <div class="project bg-white p-20 rad-6 p-relative">
                <span class="date fs-13 c-grey">15/6/2022</span>
                <h4 class="m-0">Academy Portal</h4>
                <p class="c-grey mt-10 mb-10 fs-14">Academy Portal Project Design And Programming</p>
                <div class="team">
                    <a href="#"><img src="imgs/team-01.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-02.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-03.png" alt="" /></a>
                </div>
                <div class="do d-flex">
                    <span class="fs-13 rad-6 bg-eee">Programming</span>
                    <span class="fs-13 rad-6 bg-eee">Design</span>
                </div>
                <div class="info between-flex">
                    <div class="prog bg-eee">
                        <span class="bg-green" style={{ width: "80%" }}></span>
                    </div>
                    <div class="fs-14 c-grey">
                        <i class="fa-solid fa-dollar-sign"></i>
                        1800
                    </div>
                </div>
            </div>
            <div class="project bg-white p-20 rad-6 p-relative">
                <span class="date fs-13 c-grey">15/6/2022</span>
                <h4 class="m-0">Chatting Application</h4>
                <p class="c-grey mt-10 mb-10 fs-14">Chatting Application Project Design</p>
                <div class="team">
                    <a href="#"><img src="imgs/team-01.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-02.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-03.png" alt="" /></a>
                </div>
                <div class="do d-flex">
                    <span class="fs-13 rad-6 bg-eee">Design</span>
                </div>
                <div class="info between-flex">
                    <div class="prog bg-eee">
                        <span class="bg-blue" style={{ width: "100%" }}></span>
                    </div>
                    <div class="fs-14 c-grey">
                        <i class="fa-solid fa-dollar-sign"></i>
                        950
                    </div>
                </div>
            </div>
            <div class="project bg-white p-20 rad-6 p-relative">
                <span class="date fs-13 c-grey">15/6/2022</span>
                <h4 class="m-0">Ahmed Dashboard</h4>
                <p class="c-grey mt-10 mb-10 fs-14">Ahmed Dashboard Project Design And Programming And Hosting</p>
                <div class="team">
                    <a href="#"><img src="imgs/team-01.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-02.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-03.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-04.png" alt="" /></a>
                </div>
                <div class="do d-flex">
                    <span class="fs-13 rad-6 bg-eee">Programming</span>
                    <span class="fs-13 rad-6 bg-eee">Design</span>
                    <span class="fs-13 rad-6 bg-eee">Hosting</span>
                    <span class="fs-13 rad-6 bg-eee">Marketing</span>
                </div>
                <div class="info between-flex">
                    <div class="prog bg-eee">
                        <span class="bg-green" style={{ width: "60%" }}></span>
                    </div>
                    <div class="fs-14 c-grey">
                        <i class="fa-solid fa-dollar-sign"></i>
                        1700
                    </div>
                </div>
            </div>
            <div class="project bg-white p-20 rad-6 p-relative">
                <span class="date fs-13 c-grey">15/6/2022</span>
                <h4 class="m-0">Ahmed Portal</h4>
                <p class="c-grey mt-10 mb-10 fs-14">Ahmed Portal Project Design And Programming</p>
                <div class="team">
                    <a href="#"><img src="imgs/team-01.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-02.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-03.png" alt="" /></a>
                </div>
                <div class="do d-flex">
                    <span class="fs-13 rad-6 bg-eee">Programming</span>
                    <span class="fs-13 rad-6 bg-eee">Design</span>
                </div>
                <div class="info between-flex">
                    <div class="prog bg-eee">
                        <span class="bg-green" style={{ width: "70%" }}></span>
                    </div>
                    <div class="fs-14 c-grey">
                        <i class="fa-solid fa-dollar-sign"></i>
                        850
                    </div>
                </div>
            </div>
            <div class="project bg-white p-20 rad-6 p-relative">
                <span class="date fs-13 c-grey">15/6/2022</span>
                <h4 class="m-0">Mohamed Application</h4>
                <p class="c-grey mt-10 mb-10 fs-14">Mohamed Application Project Design</p>
                <div class="team">
                    <a href="#"><img src="imgs/team-01.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-02.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-03.png" alt="" /></a>
                </div>
                <div class="do d-flex">
                    <span class="fs-13 rad-6 bg-eee">Design</span>
                </div>
                <div class="info between-flex">
                    <div class="prog bg-eee">
                        <span class="bg-red" style={{ width: "40%" }}></span>
                    </div>
                    <div class="fs-14 c-grey">
                        <i class="fa-solid fa-dollar-sign"></i>
                        950
                    </div>
                </div>
            </div>
            <div class="project bg-white p-20 rad-6 p-relative">
                <span class="date fs-13 c-grey">15/6/2022</span>
                <h4 class="m-0">Mohamed Dashboard</h4>
                <p class="c-grey mt-10 mb-10 fs-14">Mohamed Dashboard Project Design And Programming And Hosting</p>
                <div class="team">
                    <a href="#"><img src="imgs/team-01.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-02.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-03.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-04.png" alt="" /></a>
                </div>
                <div class="do d-flex">
                    <span class="fs-13 rad-6 bg-eee">Programming</span>
                    <span class="fs-13 rad-6 bg-eee">Design</span>
                    <span class="fs-13 rad-6 bg-eee">Hosting</span>
                    <span class="fs-13 rad-6 bg-eee">Marketing</span>
                </div>
                <div class="info between-flex">
                    <div class="prog bg-eee">
                        <span class="bg-green" style={{ width: "65%" }}></span>
                    </div>
                    <div class="fs-14 c-grey">
                        <i class="fa-solid fa-dollar-sign"></i>
                        1950
                    </div>
                </div>
            </div>
            <div class="project bg-white p-20 rad-6 p-relative">
                <span class="date fs-13 c-grey">15/6/2022</span>
                <h4 class="m-0">Mohamed Portal</h4>
                <p class="c-grey mt-10 mb-10 fs-14">Mohamed Portal Project Design And Programming</p>
                <div class="team">
                    <a href="#"><img src="imgs/team-01.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-02.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-03.png" alt="" /></a>
                </div>
                <div class="do d-flex">
                    <span class="fs-13 rad-6 bg-eee">Programming</span>
                    <span class="fs-13 rad-6 bg-eee">Design</span>
                </div>
                <div class="info between-flex">
                    <div class="prog bg-eee">
                        <span class="bg-green" style={{ width: "60%" }}></span>
                    </div>
                    <div class="fs-14 c-grey">
                        <i class="fa-solid fa-dollar-sign"></i>
                        1650
                    </div>
                </div>
            </div>
            <div class="project bg-white p-20 rad-6 p-relative">
                <span class="date fs-13 c-grey">15/6/2022</span>
                <h4 class="m-0">Ahmed Application</h4>
                <p class="c-grey mt-10 mb-10 fs-14">Ahmed Application Project Design</p>
                <div class="team">
                    <a href="#"><img src="imgs/team-01.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-02.png" alt="" /></a>
                    <a href="#"><img src="imgs/team-03.png" alt="" /></a>
                </div>
                <div class="do d-flex">
                    <span class="fs-13 rad-6 bg-eee">Design</span>
                </div>
                <div class="info between-flex">
                    <div class="prog bg-eee">
                        <span class="bg-green" style={{ width: "90%" }}></span>
                    </div>
                    <div class="fs-14 c-grey">
                        <i class="fa-solid fa-dollar-sign"></i>
                        950
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Project;