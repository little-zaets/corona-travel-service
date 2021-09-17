import { useSelector } from 'react-redux';

const Home = () => {
	const { user } = useSelector((state) => ({...state}));
	
	return (
		<div className="container-fluid h1 p- text-center">
			Dashboard {JSON.stringify(user)}
		</div>
	);
}

export default Home;
