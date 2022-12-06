import React from 'react';
import Counter from './components/Counter';

function App() {
	return (
		<React.Fragment>
			<Counter incrementBy={1} colour="#0066ff" />
			<Counter incrementBy={2} colour="#ff6600" />
			<Counter incrementBy={-1} colour="#9900ff" />
			<Counter incrementBy={-2} colour="#66ccff" />
		</React.Fragment>
	);
}

export default App;
