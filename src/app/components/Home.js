import React from "react";
import HomeBanner from "../templates/HomeBanner";
import HomeContent from "../templates/home-content/HomeContent";
import HomeTrending from "../templates/home-trending/HomeTrending";

function Home () {
    return (
      <>
        <HomeBanner />
        <HomeContent />
        <HomeTrending />
      </>
    );
}

export default Home;