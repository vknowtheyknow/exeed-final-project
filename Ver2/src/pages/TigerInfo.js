import React, { useState } from 'react'
import './TigerInfo.css'
import Modal from 'react-modal'
import axios from 'axios'
import { resetState } from 'react-modal/lib/helpers/ariaAppHider'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: '90px',
		margin: '20px',
	},
}

function Tigerinfo(props) {
	const { tiger, picture } = props
	let subtitle
	const [modalIsOpen, setIsOpen] = React.useState(false)

	function openModal() {
		setIsOpen(true)
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#f00'
	}

	function closeModal() {
		setIsOpen(false)
	}
	const [pwd, setPwd] = useState('')

	function onSubmit(e) {
		e.preventDefault()
		console.log(pwd)
	}
	const [access, setAccess] = useState(0)

	function login() {
		axios
			.put('https://ecourse.cpe.ku.ac.th/exceed13/api/request-permission', {
				room: 1,
				username: 'admin',
				password: pwd,
			})
			.then(function (response) {
				setAccess(response.data.access)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	function closeCage() {
		if (tiger.status === 1) {
			axios.put('https://ecourse.cpe.ku.ac.th/exceed13/api/close-door/1')
		}
	}

	function food() {
		axios.post('https://ecourse.cpe.ku.ac.th/exceed13/api/food-door', {
			room: 1,
			status: 1,
		})
	}

	return (
		<div className="make-me-center set-font">
			<div className="container-tiger">
				<div className="image-cropper-pro">
					<img src={picture} alt="Tiger" className="tiger" />
				</div>
				<div className="mt-3">
					<h2 className="status">สถานะ</h2>
					<p>กรง : {tiger.room}</p>
					<p>อุณหภูมิ : {tiger.temperature} ํC</p>
					<p>สถานะการสั่นสะเทือน : {!tiger.vibrate ? 'ปกติ' : 'สั่นแรง'}</p>
					<p>สถานะกรง : {!tiger.status ? 'ปิด' : 'เปิด'}</p>
					<p>สถานะการหิว : {!tiger.hungry ? 'ไม่หิว' : 'น้องเสือหิวแล้ว'}</p>
				</div>
				<div className="botton">
					{!!tiger.hungry && (
						<button className="button-55" onClick={food}>
							ให้อาหาร
						</button>
					)}
					{tiger.status === 1 ? (
						<button className="button-55" onClick={closeCage}>
							ปิดกรง
						</button>
					) : (
						<button
							className="button-55"
							onClick={() => {
								if (!tiger.status) {
									openModal()
								}
							}}
						>
							เปิดกรง
						</button>
					)}
				</div>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<h2 className='ent-pass'>Enter Your Password</h2>
				<form onSubmit={onSubmit}>
					<input
						type="password"
						id="password"
						placeholder="password"
						onChange={(e) => setPwd(e.target.value)}
						value={pwd}
						required
					/>
				{access === 1 ? <p>Hooray :)</p> : <p>Access denied :( </p>}
					<div className='button-modal'>
						<button type="submit" onClick={login} className='button-submit'>
							submit
						</button>

						<button onClick={closeModal}>close</button>
					</div>
				</form>
			</Modal>
		</div>
	)
}

export default Tigerinfo
