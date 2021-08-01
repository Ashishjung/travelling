import React from 'react'
import "./Destination.css"
import Asia from "../Assest/asia.m4v"
import Europe from "../Assest/europe.m4v"
import America from "../Assest/america.m4v"
import { useState } from 'react';
import { gsap } from "gsap";
import { Timeline } from 'gsap/gsap-core';
import { useEffect } from 'react'
const Destination = () => {
    let [bgvideo,setbgvideo]=useState(Asia)
    useEffect(()=>{
        let destTim=new Timeline({ duration:1})
        destTim.from(".overlay-box1",{
            opacity:0,
            delay:.6
        })
        destTim.from(".overlay-box2",{
            opacity:0
        })
    },[])
    const Asiahover=()=>{
        gsap.from(".dest-video",{
            opacity:-1,
            duration:.7,
            ease: "power4.out"
             })
             setbgvideo(Asia)
        }
    const Europehover=()=>{
      gsap.from(".dest-video",{
            opacity:-1,
            duration:.7,
            ease: "power4.out"
             })
setbgvideo(Europe)
       }
const Americahover=()=>{
   gsap.from(".dest-video",{
        opacity:-1,
        duration:.7,
        ease: "power4.out"
          })
 setbgvideo(America)
 }
let Leavasia=()=>{
    gsap.to(".dest-video",{
        opacity:1,
        duration:1
          })
}
    return (
        <>
            <div className="destination">
            <div className="video-show">
            <div className="video-side-B"></div>
            <video src={bgvideo} loop muted autoPlay={true} className="dest-video"/>
                </div>
            <div className="destV-overlay">
                <div className="overlay-box1">
                    <h1>DISCOVER <br></br>
                    NEW PLACE</h1>
                    </div>
                    <div className="overlay-box2">
                    <h2 onMouseEnter={Asiahover} onMouseLeave={()=>Leavasia()}>ASIA</h2>
                    <h2 onMouseEnter={Europehover} onMouseLeave={()=>Leavasia()}>Europe</h2>
                    <h2 onMouseEnter={Americahover} onMouseLeave={()=>Leavasia}>AMERICA</h2>
                    </div>
                    </div>
            </div>
        </>
    )
}

export default Destination
