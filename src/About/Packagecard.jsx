import React from 'react'
import Packagedata from "./Packagedata"
const Packagecard = (props) => {
    return (
        <>
            <div className="package-box">
            <h3>{props.hname}</h3>
            <br></br>
            <hr/>
          <Packagedata
              dataname="New York"
          />
          <Packagedata
              dataname="Srilanka"
          />
          <Packagedata
              dataname="Maldives"
          />
          <Packagedata
              dataname="Nepal"
          />
          <Packagedata
              dataname="India"
          />
          <Packagedata
               dataname="Austria"
          />
          </div>
        </>
    )
}

export default Packagecard
