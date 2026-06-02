"use client";

import NAV from "./nav/nav";
import INTRO from "./intro/intro";
import PK from "./pk/pk";
import CONTENT from "./content/content";
import PJS from "./projects/page";
import { main } from "./nav/script";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    main();
    AOS.init({
      duration: 800,
      once: false, // allows animations to trigger repeatedly when scrolling up and down
    });
  }, []); // also important

  return (
    <>
      <NAV />
      
      <INTRO />

      <div data-aos="fade-in" data-aos-duration="1000" className="seperated"></div>

      <div data-aos="fade-up">
        <PK />
      </div>
      
      <PJS />

      <div data-aos="fade-in" className="sepbackground">
        <h2>Lets Dive More</h2>
      </div>

      <div data-aos="fade-up">
        <CONTENT />
      </div>
    </>
  );
}
