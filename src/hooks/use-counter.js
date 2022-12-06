import { useEffect, useState } from 'react';

const useCounter = (props) => {
	const [counter, setCounter] = useState(0);
	const { incrementBy } = props;

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + incrementBy);
		}, 1000);

		return () => clearInterval(interval);
	}, [incrementBy]);

	return counter;
};

export default useCounter;
