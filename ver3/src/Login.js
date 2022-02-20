import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from './context/AuthProvider'
import './Login.css'
import axios from './api/axios'
const LOGIN_URL = '/open-close';
import useAuth from './hooks/useAuth';

const Login = () => {
   const { setAuth } = useAuth();
	const userRef = useRef()
	const errRef = useRef()

	const [user, setUser] = useState('')
	const [pwd, setPwd] = useState('')
	const [errMsg, setErrMsg] = useState('')
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		userRef.current.focus()
	}, [])

	useEffect(() => {
		setErrMsg('')
	}, [user, pwd])

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const response = await axios.post(
				LOGIN_URL,
				JSON.stringify({ user, pwd }),
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true,
				}
			)
			console.log(JSON.stringify(response?.data))
			//console.log(JSON.stringify(response));
			const accessToken = response?.data?.accessToken
			const roles = response?.data?.roles
			setAuth({ user, pwd, roles, accessToken })
			setUser('')
			setPwd('')
			setSuccess(true)
		} catch (err) {
			console.log(err);
			if (!err?.response) {
				setErrMsg('No Server Response')
			} else if (err.response?.status === 400) {
				setErrMsg('Missing Username or Password')
			} else if (err.response?.status === 401) {
				setErrMsg('Unauthorized')
			} else {
				setErrMsg('Login Failed')
			}
			errRef.current.focus()
		}
	}

	return (
		<>
			{success ? (
				<section>
					{/* link to dashboard */}
				</section>
			) : (
				<section>
					<img
						src="https://cdn-icons-png.flaticon.com/512/6815/6815898.png"
						alt="logo"
						className="icon"
					/>
					<p
						ref={errRef}
						className={errMsg ? 'errmsg' : 'offscreen'}
						aria-live="assertive"
					>
						{errMsg}
					</p>
					<h1 className="sign-in-text">SIGN IN</h1>
					<form onSubmit={handleSubmit}>
						<img
							src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
							alt="user"
							className="form-icon"
						/>
						{/* <p htmlFor="username">Username:</p> */}
						<input
							type="text"
							id="username"
							ref={userRef}
							autoComplete="off"
							placeholder="username"
							onChange={(e) => setUser(e.target.value)}
							value={user}
							required
						/>
						<img
							src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
							alt="password"
							className="form-icon"
						/>
						{/* <p htmlFor="password">Password:</p> */}
						<input
							type="password"
							id="password"
							placeholder="password"
							onChange={(e) => setPwd(e.target.value)}
							value={pwd}
							required
						/>
						<button>Sign In</button>
					</form>
				</section>
			)}
		</>
	)
}

export default Login 