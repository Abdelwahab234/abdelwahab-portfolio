"use client";

function setmode(mode:any ,navbar:any , seperated:any , h2skills:any , navbarbuttons:any ,labels:any , allabout:any , inputslabels:any , inputs:any , explain:any){
            
         let groundmode =  mode == "light"? "#fff":  "#000"
        let colormode = mode == "light" ? "#000" : "#fff"
        let buttonmode =  mode == "light"? "#000":  "rgb(130, 0, 166)"
            
             
            document.body.style.backgroundColor =groundmode; //
            navbar.style.backgroundColor =groundmode;//
            seperated.style.backgroundColor = groundmode;//
            h2skills.style.color = colormode;////
            for(let i = 0 ;  i<navbarbuttons[0].length ; i++)navbarbuttons[0][i].style.color =colormode////
            for(let i = 0 ; i<navbarbuttons[1].length ; i++)navbarbuttons[1][i].style.backgroundColor = buttonmode;
            
            
            
            
            for(let i = 0 ; i<labels.length ; i++)labels[i].style.color =colormode;////
            for(let i = 0 ; i<allabout.length ; i++)allabout[i].style.color =colormode;////
            for(let i = 0 ; i<inputslabels.length ; i++)inputslabels[i].style.color =colormode;////
            for(let i = 0 ; i<inputs.length ; i++)inputs[i].style.color =colormode;////
            for(let i = 0 ; i<inputs.length ; i++)inputs[i].style.borderBottom = `${colormode} 2px solid `;///

            for(let i = 0 ; i<explain.length ; i++)explain[i].style.color =colormode;////

            let newSections = document.querySelectorAll(".experience-section *, .certificates-section *, .skills h3");
            for(let i = 0 ; i<newSections.length ; i++) (newSections[i] as HTMLElement).style.color = colormode;
            
            return mode
        }

export function main(){ 

   var   navbar :any= document.querySelector(".nav> ul")
      var  navbarbuttons :any = [document.querySelectorAll(".nav a") ,document.querySelectorAll(".nav button")]
        var seperated :any = document.querySelector(".seperated")
         var labels  :any = document.querySelectorAll(".skills label");
var        h2skills :any = document.querySelector(".skills h2");
   var     allabout :any = document.querySelectorAll(".about *");
      var  inputslabels :any = document.querySelectorAll(".inputs label");
var        inputs  :any = document.querySelectorAll(".inputs input");
   var     explain :any = document.querySelectorAll(".explain *");
      var  mode :any = document.querySelector(".mode")
 





        console.log(mode, navbarbuttons.length);
        

        // mode change 
        localStorage.setItem("mode" , "light");
        
  console.log(mode)


        console.log(mode, navbarbuttons.length);
        
        // mode change 
        if (!localStorage.getItem("mode")) {
            localStorage.setItem("mode", "light");
        }
        setmode(localStorage.getItem("mode") || "light", navbar, seperated, h2skills, navbarbuttons, labels, allabout, inputslabels, inputs, explain);
        mode.onclick = ()=>{ 
            
          localStorage.setItem("mode",setmode(localStorage.getItem("mode") == "light" ? "night" : "light" , navbar , seperated ,h2skills , navbarbuttons ,labels , allabout ,inputslabels , inputs ,explain));
            

        }

}