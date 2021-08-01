import React from 'react'

const Othercontact = (props) => {
    return (
        <>
        <div className="cont-icon">
            <div className="box">
           {props.icon}
            </div>
            <h3>{props.h2}</h3>
            <h6>
            {props.h6}
            </h6>
        </div> 
        </>
    )
}

export default Othercontact
