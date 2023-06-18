import { useOutletContext } from 'react-router-dom'
function Plans() {
    const [, setActivePage] = useOutletContext();
    setActivePage((e) => (e = "plans"));
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

        <h1 class="p-relative">Plans</h1>
        <div class="plans-page d-grid m-20 gap-20">
            <div class="plan green bg-white p-20">
                <div class="top bg-green txt-c p-20">
                    <h2 class="m-0 c-white">Free</h2>
                    <div class="price c-white"><span>$</span>0.00</div>
                </div>
                <ul>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Access All Text Lessons</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Access All Videos Lessons</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Appear On Leaderboard</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-xmark fa-fw"></i>
                        <span>Browse Content Without Ads</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-xmark fa-fw"></i>
                        <span>Access All Assignments</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-xmark fa-fw"></i>
                        <span>Get Daily Prizes</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-xmark fa-fw"></i>
                        <span>Earn Certificate</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-xmark fa-fw"></i>
                        <span>1 GB Space For Hosting Files</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-xmark fa-fw"></i>
                        <span>Access Badge System</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                </ul>
                <a href="#" class="btn-shape bg-green c-white d-block w-fit">Join</a>
            </div>

            <div class="plan blue bg-white p-20">
                <div class="top bg-blue txt-c p-20">
                    <h2 class="m-0 c-white">Basic</h2>
                    <div class="price c-white"><span>$</span>7.99</div>
                </div>
                <ul class="list-none p-0">
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Access All Text Lessons</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Access All Videos Lessons</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Appear On Leaderboard</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Browse Content Without Ads</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Access All Assignments</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Get Daily Prizes</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Earn Certificate</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-xmark fa-fw"></i>
                        <span>1 GB Space For Hosting Files</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-xmark fa-fw"></i>
                        <span>Access Badge System</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                </ul>
                <a href="#" class="btn-shape bg-blue c-white d-block w-fit">Join</a>
            </div>

            <div class="plan orange bg-white p-20">
                <div class="top bg-orange txt-c p-20">
                    <h2 class="m-0 c-white">Premium</h2>
                    <div class="price c-white"><span>$</span>19.99</div>
                </div>
                <ul class="list-none p-0">
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Access All Text Lessons</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Access All Videos Lessons</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Appear On Leaderboard</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Browse Content Without Ads</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Access All Assignments</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Get Daily Prizes</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Earn Certificate</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>1 GB Space For Hosting Files</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-check fa-fw yes"></i>
                        <span>Access Badge System</span>
                        <i class="fa-solid fa-circle-info help"></i>
                    </li>
                </ul>
                <p class="c-grey m-0 txt-c">This Is Your Current Plan</p>
            </div>

        </div>
    </div>);
}

export default Plans;