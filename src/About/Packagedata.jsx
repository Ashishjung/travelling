import React from 'react'
import Button from '@material-ui/core/Button';
const Packagedata = (props) => {
    return (
        <>
    <div className="p-box">
                <h4>{props.dataname}</h4>
                <Button variant="contained" className="p-btn">
                         $1500
                    </Button>
            </div>
        </>
    )
}

export default Packagedata
