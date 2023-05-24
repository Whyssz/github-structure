import axios from 'axios';
import { useEffect, useState } from 'react';

const LongPulling = () => {
	const [message, setMessage] = useState([]);
	const [value, setValue] = useState('');

	useEffect(() => {
		subscribe();
	}, []);

	const subscribe = async () => {
		try {
			const { data } = await axios.get('http://localhost:5000/get-message');
			setMessage(prev => [data, ...prev]);
			await subscribe();
		} catch (e) {
			setTimeout(() => {
				subscribe();
			}, 500);
		}
	};

	const sendMessage = async () => {
		await axios.post('http://localhost:5000/new-message', {
			message: value,
			id: Date.now(),
		});
	};

	return (
		<div className='center'>
			<div>
				<div className='form'>
					<input
						type='text'
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<button onClick={sendMessage}>Отправить</button>
				</div>
				<div className='message'>
					{message.map(mess => (
						<div key={mess.id}>{mess.message}</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LongPulling;
