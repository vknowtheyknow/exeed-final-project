import React from 'react'
import './ElementDashboard.css'
import {Link} from 'react-router-dom'

function ElementDashboard(props){
    const {tiger,picture}=props;
    function GorR(tiger){
        return tiger.vibrate||tiger.hungry;
    }
    return (
        <>
                <div className="card" >
                    
                    {GorR(tiger)? <div className="red"></div>:<div className="green"></div>}
                    {/* {!GorR(tiger) &&<div className="green"></div>} */}
                    <Link to={`/dashboard/${tiger.case}`}>
                    <div className="image-cropper">
                        <img src={picture} alt="tiger1" className="profile-pic"/>
                    </div>
                    <div className="tigerElement"></div>
                    <div className="container">
                        <h4><b>เสือตัวที่ {tiger.case}</b></h4> 
                    </div>
                    </Link>
                </div>
        </>
                
    )
}

export default ElementDashboard