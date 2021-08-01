import React from 'react'
import "./About.css"
import Aboutimg from "../Assest/aboutimg.jpg"
import { gsap } from "gsap";
import { useEffect } from 'react';
import Bike from "../Assest/bike.jpg";
import Car from "../Assest/car.jpg";
import Photography from "../Assest/photography.jpg";
import Food from "../Assest/food.jpg"
import Packagecard from './Packagecard';
import Otherfac from './Otherfac';
import { ScrollTrigger } from "gsap/ScrollTrigger";
const About = () => {
    useEffect(()=>{
        gsap.from(".team",{
            scrollTrigger:{
                trigger:"#about",
                pin:true,
                pinSpacing:false,
                
                end:"+=500"
            }
        })
        gsap.from("#aboutimg",{
            opacity:0,
            duration:.8
        })
        gsap.from(".abouth1",{
            opacity:0,
            y:"-20",
            duration:.6,
            delay:1
        })
       
    },[])
    return (
        <>
        <div className="about">
        <div className="about-intro" id="about">
        <img src={Aboutimg} alt="" id="aboutimg"/>
        <div className="about-overlay">
            <h1 className="abouth1">About US</h1>
        </div>
        </div>
         <div className="team">
            <div className="team-img"></div>
            <div className="team-detail">
                <p>ABOUT US</p>
                <h3>WHO WE ARE?</h3>
                <p>
                Here, We focus on a range of items and features that we use in life 
                without giving them a second thought. such as Coca Cola. Dolor sit amet,
                 consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
            </div>
        </div>
        <div className="packages">
            <h3>We Provide Affordable Prices</h3>
            <h6>Well educated, intellectual people, especially scientists at all times demonstrate considerably.</h6>
       <div className="package-detail">
        <Packagecard
            hname="Cheap packages"
        />
        <Packagecard
              hname="Luxury packages"
        />
        <Packagecard
              hname="Camping packages"
        />
       </div>
        </div>
        <div className="other-facility">
        <h3>Other issues we can help you with</h3>
     <h6>We all live in an age that belongs to the young at heart. Life that is..</h6>
     <div className="facility-box">
     <Otherfac
     img={Car}
         h2="Rent a Car"
         p="The preservation of human life is the ultimate value, a pillar of ethics and the foundation."
     />
     <Otherfac
     img={Bike}
                 h2="Bike riding"
                p="I was always somebody who felt quite sorry for myself, what I had not got compared."
     />
     <Otherfac
     img={Photography}
            h2="Photography"
                p="The following article covers a topic that has recently moved to center stage–at least it seems."
     />
     <Otherfac
     img={Food}
            h2="Food"
                p="There are many kinds of narratives and organizing principles. Science is driven by evidence."
     />
     </div>
        </div>
         </div>
        </>
    )
}

export default About
