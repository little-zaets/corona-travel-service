import { useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({ history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	//need to add email validation
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${process.env.REACT_APP_API}/register`, {
				//request body in auth.js in the backend 
				name: name,
				email: email,
				password: password
			});
			console.log('Register User ===> ', response);
			toast.success('Registration Successful. You can now login.');
			history.push('/login'); 
		}
		catch (err) {
			console.log(err.message);
			if (err.response.status !== 200) {
				toast.error(err.response.data);
			}
		}
	};
	
	return (
		<>
			<div className="container-fluid bg-secondary p-5 text-center">
				<h1>Register</h1>
			</div>
			
			<ToastContainer />
			
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<RegisterForm
							handleSubmit={handleSubmit}
							name={name}
							setName={setName}
							email={email}
							setEmail={setEmail}
							password={password}
							setPassword={setPassword}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
