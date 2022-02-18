import '../components/tiStatus.css'

function tiStatus(status) {
    
	return (
		<div className="tiStatus">
			<div className="tvibrate">
				<p>ความสั่นสะเทือน {status.vibrate===0?ปกติ:ไม่ปกติ}</p>
			</div>
			<div className="ttemper">
				<p>อุณหภูมิ</p>
                <p>{status.temperature}</p>
			</div>
			<div className="thungry">
				<p>หิวรึเปล่า</p>
                <p>{status.hungry} นาที</p>
			</div>
		</div>
	)
}

export default tiStatus
