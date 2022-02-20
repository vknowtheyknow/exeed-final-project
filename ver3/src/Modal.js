import React, { useState } from 'react'
import { Madal as Popup } from 'react-modal'

function Modal() {
	const [pwd, setPwd] = useState('')

	function onSubmit(e) {
		e.preventDefault()
		console.log(pwd)
	}

	return (
		<Popup open={modalIsOpen}
			onAfterOpen={afterOpenModal}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
			<button onClick={closeModal}>close</button>
			<div>I am a modal</div>
			<form>
				<input />
				<button>tab navigation</button>
				<button>stays</button>
				<button>inside</button>
				<button>the modal</button>
			</form>
		</Popup>
	)
}

export default Modal
