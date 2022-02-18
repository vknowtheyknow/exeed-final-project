import React from 'react'
import {useParams} from 'react-router-dom'
import './tigerInfo.css'

function Tigerinfo(tiger,picture) {
  const {thiscage} = useParams();
  const choose = tiger.filter((ti) =>{
    return ti.thiscage === tiger.case
  })
  
	return (
    <div className="make-me-center set-font">
      <div className="container-tiger">
        <div className="tiger-pic">
          <img
              src={picture}
              alt="Tiger"
              className="tiger"
          />
        </div>
        <div className="mt-3">
          <h2 className="status">สถานะ</h2>
          <p>กรง :</p>
          <p>สถานะการหิว :</p>
          <p>จำนวนครั้งที่กด : </p>
          <p>อุณหภูมิ :</p>
          <p>สถานะการสั่นสะเทือน :</p>
          <p>สถานะกรง :</p>
          <p>ระยะปลอดภัย :</p>
        </div>
        <div className="botton">
          <button className="btn-feed">ให้อาหาร</button>
          <button className="btn-door">เปิดกรง</button>
        </div>
      </div>
    </div>
  ) 
}


export default Tigerinfo