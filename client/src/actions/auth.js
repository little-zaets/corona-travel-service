import axios from 'axios';

export const register = async (name, email, password) => {
	await axios.post(`${process.env.REACT_APP_API}/register`);
}

export const login = async (email, password) => {
	const data = { email, password };
	//send route and user object to backend to check credentials 
	return await axios.post(`${process.env.REACT_APP_API}/login`, data, { withCredentials: true });
}	