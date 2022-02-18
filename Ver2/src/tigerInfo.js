import React from 'react'
import './tigerInfo.css'

function Tigerinfo(props) {
  const {tiger,picture} = props;
	return (
    <div className="make-me-center set-font">
      <div className="container-tiger">
      
        <div className="image-cropper">
          <img
              src={picture}
              alt="Tiger"
              className="tiger"
          />
        </div>
        <div className="mt-3">
          <h2 className="status">สถานะ</h2>
          <p>กรง : {tiger.case}</p>
          <p>อุณหภูมิ : {tiger.temp}</p>
          <p>สถานะกรง : {tiger.cageStatus}</p>
          <p>สถานะการสั่นสะเทือน : {tiger.vibrate}</p>
          <p>สถานะการหิว : {tiger.hungry}</p>
        </div>
        <div className="botton">
          <button className="button-55" role="button">ให้อาหาร</button>
          <button className="button-55" role="button">เปิดกรง</button>
        </div>
      </div>
    </div>
  ) 
}

export default Tigerinfo