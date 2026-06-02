"use client";
import { useEffect, useState } from "react";

export default function INTRO(){ 
  const [playAnim, setPlayAnim] = useState(false);

  useEffect(() => {
    // Set play immediately; CSS animation-delay handles the waiting perfectly
    setPlayAnim(true);
  }, []);

  return ( 
        <section className={`intro intro-anim ${playAnim ? 'play' : ''}`} id="intro">
        <div className={`intro-anim delay-1 ${playAnim ? 'play' : ''}`}>
            <h2 className={`intro-anim delay-2 ${playAnim ? 'play' : ''}`}> hello im , Abdelwahab </h2>
            <p className={`intro-anim delay-3 ${playAnim ? 'play' : ''}`}>this my simple portofolio well show my skills and more details about me and contact</p>
           <a href="#bk" className={`intro-anim delay-4 ${playAnim ? 'play' : ''}`}> <button>Lets Dive</button></a>
        </div>
    </section>

  )
}