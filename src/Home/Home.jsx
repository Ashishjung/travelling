import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Video from "../Assest/vide.m4v"
import Video2 from "../Assest/videe.m4v"
import "./Home.css";
import { gsap } from "gsap";
import { Timeline } from 'gsap/gsap-core';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

import Homecard from "./Homecard"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Link} from "react-scroll";
gsap.registerPlugin(ScrollTrigger); 
const Home = (props) => {
   let videor=useRef(true)
    let depbox1=useRef()
    let [vidplay,setvid]=useState(false)
  
    useEffect(()=>{
        let tl=new Timeline({ease: "power4.out",duration:.6})
        tl.from(".text-container",{
            opacity:0,
            duration:1,
            delay:1.5,
              })
             .from(".icon-container",{
                    opacity:0
                })
              },[])
    useEffect(()=>{
        let tl2=new Timeline({
            duration:.7,
            ease: "power2.out",
             scrollTrigger:{
                trigger:".deeper",
            toggleActions:"play none none reverse",
                start:"-20% center",
                pinSpacing:false,
                end:"+=200"
            }
            })
             tl2.from(".deeper",{
            opacity:0
             })
             .from(".under-water",{
                duration:1,
                opacity:-1,
                x:"-2rem"
         })
        .from(".deep-boxes",{
           opacity:0
       })
      .from(".dep2-box1",{
           opacity:0,
        })
        .from(".depimg-box",{
            opacity:0
        },"-=.2")
     
    },[])
      useEffect(()=>{
gsap.from(".video",{
        scrollTrigger:{
                         trigger:".video",
                          pin:true,
                       pinSpacing:false,
                       end:"+=2000"
                      }
                 })
                 gsap.from(".under-water",{
                      scrollTrigger:{
                                     trigger:".under-water",
                                      pin:true,
                                   pinSpacing:false,
                                   end:"+=2500"
                                  }
                             })
                            },[])
    
    useEffect(()=>{
        setTimeout(()=>{
            if(videor.current){
                videor.current.play()
             }
             setvid(true)
        },1000)
       },[])
      return (
        <>
            <div className="Home">
           <video src={Video} ref={videor} loop muted 
            autoPlay={vidplay} className="video"/>
           <div className="video-overlay">
               <div className="text-container">
                   <h2 className="home-text">Never Stop to Exploring the world.</h2>
                   <p className="home-text2">Dive into the beauty of nature without the loss of daily comfort.
                   Unforgettable travel
                    experiences .
                   </p>
                   <p>
                     <Link
                    activeClass="active"
                    to="homecard"
                    spy={true}
                    smooth={true}
                     duration={1000}
                >
        <Button variant="contained" className="btn">
                         Explore
                    </Button>
                    </Link>
                      </p>
                    <div className="icon-container">
                     <i class="uil uil-facebook-f"></i>
                    <i class="uil uil-instagram-alt"></i>
                    <i class="uil uil-twitter"></i>
                    </div>
               </div>
              </div>
              </div>  
              <div className="hom-con-2">
                <video src={Video2} loop muted autoPlay={true} className="under-water"/>
                <div className="image-overlay">
                    <h1 className="deeper">DEEPER</h1>
                    <div className="deep-boxes">
                    <Homecard
                        h3="Ready to Send"
                        btn="More"
                        p="Let us take You away.Pack your bags.We're going for vacation!"
                        showbutn
                        ref={depbox1}
                        />
                      <Homecard
                        h3="Progress Collection"
                        p="Far far away, behind the word mountains, 
                        far from the countries Vokalia and Consonantia, there live the blind texts."
                        showbutn={false}
                        id="homecard"
                    />
                  
                    
                    <Homecard
                        h3="Find an Adventure"
                        p="Plan your travel now and get in touch with us.
                        And we make your travelling dreams comes true.."
                        showbutn={false}
                    />
                      
                    </div>
                    <div className="deep-box2">
                        <div className="dep2-box1">
                                            <h2>Fifty Years Of Exploration</h2>
                                            <p>Far far away, behind the word mountains, 
                                            far from the countries Vokalia and Consonantia, there live the blind texts. 
                                            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                        <div className="dep2-box2">
                            <div className="depimg-box"></div>
                        </div>
                    </div>
                </div>
            </div>
       
            </>
     
    )
}

export default Home
