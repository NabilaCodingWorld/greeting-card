import ConfessionPage from "@/components/confession/page";
import CoverPage from "@/components/cover/page";
import GalleryPage from "@/components/gallery/page";
import OurStoryPage from "@/components/story/page";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <CoverPage />
      <OurStoryPage />
      <ConfessionPage />
      <GalleryPage />
    </div>
  );
};

export default HomePage;
