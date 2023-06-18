import React, { Component } from "react";
import { useOutletContext } from "react-router-dom";
import UserProfile from "../compoments/userProfile";
import Quickdraft from "../compoments/quickDraft";
import Yearlytarget from "../compoments/YearlyTarget";
import Tickets from "../compoments/tickets";
import Header from "../compoments/header";
import Latestnews from "../compoments/latestNews";
import Tasks from "../compoments/Tasks";
import Searchitems from "../compoments/SearchItems";
import Latestupload from "../compoments/latestUploads";
import Lastproject from "../compoments/LastProject";
import Reminder from "../compoments/Remiders";
import Lastpost from "../compoments/lastPost";
import Social from "../compoments/social";
import Project from "../compoments/project";
function Home() {
  const [, setActivePage] = useOutletContext();
  setActivePage((e) => (e = "dashboard"));
  return (
    <div class="content w-full">
      <Header header="Dashboard" />
      <div class="wrapper d-grid gap-20">
        <UserProfile />
        <Quickdraft />
        <Yearlytarget />
        <Tickets />
        <Latestnews />
        <Tasks />
        <Searchitems />
        <Latestupload />
        <Lastproject />
        <Reminder />
        <Lastpost />
        <Social />
      </div>
      <Project />
    </div>
  );
}

export default Home;
