import React from 'react'
import {Link} from "react-scroll";
const Otherfac = (props) => {
    return (
        <>
             <div className="f-boxes">
                <img src={props.img} alt="" id="bike"/>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                     duration={1000}
                >
                <h2>{props.h2}</h2>
                </Link>
                <p>
                {props.p}
                </p>
             </div>
        </>
    )
}

export default Otherfac
