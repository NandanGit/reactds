import './App.css';
import { Button, Surface } from '@reactds/coorg';

function App() {
	return (
		<>
			<Surface
				style={{
					minWidth: '80%',
					height: '80%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '1rem',
				}}
			>
				<Button
					// intent='info'
					// variant='filled'
					// disabled
					onClick={() => console.log('Clicked')}
				>
					Hello
				</Button>
			</Surface>

			{/* Background */}
			<div className='background'>
				<div className='animation-container'>
					<div className='gradient gradient-1' />
					<div className='gradient gradient-2' />
					<div className='gradient gradient-3' />
					<div className='gradient gradient-4' />
					<div className='gradient gradient-5' />
				</div>
			</div>
		</>
	);
}

export default App;
