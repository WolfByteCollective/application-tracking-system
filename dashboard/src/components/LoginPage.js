import { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { getrecruiterToken, recruitersignUp, storeToken } from './api/loginHandler';

const LoginPage = (props) => {
	const [authWrapper] = useState({
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		textAlign: 'left',
		marginTop: '5vh'
	});

	const [authInner] = useState({
		width: '450px',
		margin: 'auto',
		background: '#ffffff',
		boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
		padding: '40px 55px 45px 55px',
		borderRadius: '15px',
		transition: 'all .3s'
	});

	const handleLogin = (cname, pwd) => {
		console.log('Login click');
		let obj = {
			companyname: cname,
			password: pwd
		};
		getrecruiterToken(obj)
			.then((res) => {
				console.log("This is the result",res);
				if (res['error']) throw new Error('Wrong username or password');
				storeToken({ ...res, userId: res.profile.id });
			})
			.then((res) => {
				alert('Log In successfull! Refresh to proceed');
			})
			.catch((error) => {
				console.log(error);
				alert('Error while login ! Wrong username or password');
			});
	};

	const handleSignup = (cname, pwd) => {
		let obj = {
			companyname: cname,
			password: pwd,
		};
		recruitersignUp(obj)
			.then((res) => {
				alert('Sign up successfull! Proceed to Login');
			})
			.catch((error) => {
				alert('Error while signing up');
			});
	};


	useEffect(() => {
		if (localStorage.getItem('token') === null) {
            console.log("This is the token",localStorage.getItem('token')); 
			const query = new URLSearchParams(window.location.search);
			const token = query.get('token');
			const userId = query.get('userId');
			let obj = {
				token: token,
				userId: userId
			};
			if (token) {
				storeToken(obj);
				window.location.assign('http://localhost:3000/profile');
			}
		}
	}, []);

	return (
		<div className='auth-wrapper' style={authWrapper}>
			<div className='auth-inner' style={authInner}>
				<Tabs
					defaultActiveKey='login'
					id='logintab'
					className='mx-auto'
					style={{ paddingLeft: '25%' }}
				>
					<Tab eventKey='login' title='Login'>
						<form>
							<div className='form-group my-4'>
								<label htmlFor="uname">Username</label>
								<input
									type='text'
									className='form-control'
									id='uname'
									placeholder='Enter username'
								/>
							</div>

							<div className='form-group my-4'>
								<label htmlFor="pwd">Password</label>
								<input
									type='password'
									className='form-control'
									id='pwd'
									placeholder='Enter password'
								/>
							</div>
                            
							<div className='d-flex justify-content-center'>
								<button
									type='submit'
									onClick={(e) => {
										e.preventDefault();
										let uname = document.querySelector('#uname').value;
										let pwd = document.querySelector('#pwd').value;
										handleLogin(uname, pwd);
									}}
									className='custom-btn px-3 py-2 mx-2'
								>
									Login
								</button>
							</div>
						</form>
					</Tab>
					<Tab eventKey='signup' title='Signup'>
						<form>
							<div className='form-group my-4'>
								<label htmlFor="suname">Username</label>
								<input
									type='text'
									className='form-control'
									id='suname'
									
								/>
							</div>
							<div className='form-group my-4'>
								<label htmlFor="spwd">Password</label>
								<input
									type='password'
									className='form-control'
									id='spwd'
									placeholder='Enter password'
								/>
							</div>
							<div className='d-flex justify-content-center'>
								<button
									type='submit'
									onClick={(e) => {
										e.preventDefault();
										let cname = document.querySelector('#suname').value;
										let pwd = document.querySelector('#spwd').value;
										handleSignup(cname, pwd);
									}}
									className='custom-btn px-3 py-2 mx-2'
								>
									Sign Up
								</button>
							</div>
						</form>
					</Tab>
				</Tabs>
			</div>
		</div>
	);
};

export default LoginPage;