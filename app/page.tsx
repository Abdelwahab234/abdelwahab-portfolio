"use client";

import NAV from "./nav/nav";
import INTRO from "./intro/intro";
import PK from "./pk/pk";
import CONTENT from "./content/content";
import PJS from "./projects/page";
import { main } from "./nav/script";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    main();
  }, []); // also important

  return (
    <>
      <NAV />
      <INTRO />

      <div className="seperated"></div>

      <PK />
      <PJS />

      <div className="sepbackground">
        <h2>Lets Dive More</h2>
      </div>

      <CONTENT />
    </>
  );
}
