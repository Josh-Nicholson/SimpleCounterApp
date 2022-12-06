import useCounter from '../hooks/use-counter';
import Card from './Card';

const Counter = (props) => {
	const counter = useCounter(props);

	return <Card colour={props.colour}>{counter}</Card>;
};

export default Counter;
