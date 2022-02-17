import React from 'react'
import './Dashboard.css'
function Dashboard()
     {
    // const {picure}=props;
    return (
        <div className="pos">
            <div className="posUp">
                <div className="card" >
                    <div className="green"></div>
                    <div className="image-cropper">
                        <img src="https://media.4-paws.org/5/4/4/c/544c2b2fd37541596134734c42bf77186f0df0ae/VIER%20PFOTEN_2017-10-20_164-3854x2667-1920x1329.jpg" alt="tiger1" className="profile-pic"/>
                    </div>
                    <div className="tigerElement"></div>
                    <div className="container">
                        <h4><b>เสือตัวที่ 1</b></h4> 
                    </div>
                </div>
                <div className="card">
                    <div className="image-cropper">
                        <img src="https://static.bangkokpost.com/media/content/20200219/c1_1860789_200219162635.jpg" alt="tiger1" className="profile-pic"/>
                    </div>
                    <div className="tigerElement"></div>
                    <div className="container">
                        <h4><b>เสือตัวที่ 2</b></h4> 
                    </div>
                </div>
                <div className="card">
                    <div className="image-cropper">
                        <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1199,h_800/w_74,x_13,y_13,g_south_west,l_klook_water/activities/dtxxval61hyxkeqlqaou/TigerKingdomTicketinPhuketforThaiResidents.jpg" alt="tiger1" className="profile-pic"/>
                    </div>
                    <div className="tigerElement"></div>
                    <div className="container">
                        <h4><b>เสือตัวที่ 3</b></h4> 
                    </div>
                </div>
            </div>
            <div className="posBottom">
                <div className="card">
                    <div className="image-cropper">
                        <img src="https://i.natgeofe.com/k/1bf26ec6-00ec-4054-ac87-160bed47ff4f/tiger2_3x2.png" alt="tiger1" className="profile-pic"/>
                    </div>
                    <div className="tigerElement"></div>
                    <div className="container">
                        <h4><b>เสือตัวที่ 4</b></h4> 
                    </div>
                </div>
                <div className="card">
                    <div className="image-cropper">
                        <img src="https://static01.nyt.com/images/2019/05/07/science/06SCI-TIGER1/03SCI-TIGER1-superJumbo.jpg" alt="tiger1" className="profile-pic"/>
                    </div>
                    <div className="tigerElement"></div>
                    <div className="container">
                        <h4><b>เสือตัวที่ 5</b></h4> 
                    </div>
                </div>
                <div className="card">
                    <div className="image-cropper">
                        <img src="https://i.natgeofe.com/n/3ccdfcd5-3e4d-4821-bd80-fc896a9c3599/2944046_4x3.jpg" alt="tiger1" className="profile-pic"/>
                    </div>
                    <div className="tigerElement"></div>
                    <div className="container">
                        <h4><b>เสือตัวที่ 6</b></h4> 
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Dashboard