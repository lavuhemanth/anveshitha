import React from "react";
import HomeBanner from "../templates/HomeBanner";
import HomeContent from "../templates/home-content/HomeContent";
import HomeTrending from "../templates/home-trending/HomeTrending";
import MainSection from "../templates/home-main/MainSection";

function Home () {
    return (
      <>
        <MainSection />
        <HomeBanner />
        <HomeContent />
        <HomeTrending />
      </>
    );
}

export default Home;