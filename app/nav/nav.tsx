
"use client";
import "./nav.css";
import "./script";
 
 

export default function NAV(){ 


 

  return ( 
     <nav>
            <div className="nav"><ul>
                <li><a href="#intro">home</a></li>
                <li><a href="#bk">about</a></li>
                <li><a href="#skills">skills</a></li>
                <li className="buttomsNav"><a href="#contact"><button>Contact</button></a></li>
                <li className="limode"><button className="mode">night</button></li>
            </ul></div>
        </nav>
        
        
  )
}