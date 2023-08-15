import './App.css';
import { Button } from '@reactds/coorg';

function App() {
	return (
		<>
			<Button variant='outline' onClick={() => console.log('Clicked')}>
				Hello
			</Button>
		</>
	);
}

export default App;
