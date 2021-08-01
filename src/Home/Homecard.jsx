import React from 'react'
import "./Home.css";
import Button from '@material-ui/core/Button';
const Homecard = (props) => {
    return (
        <div className="dep" id="homecard">
            <h3>{props.h3}</h3>
            <p>{props.p}
        </p>
        {props.showbutn && <Button variant="contained" className="more-btn">
                         {props.btn}
                    </Button>}
        </div>
    )
}

export default Homecard
