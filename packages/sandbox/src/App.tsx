import './App.css';
import { ButtonGallery } from './Galleries/ButtonGallery';

function App() {
	return (
		<>
			<ButtonGallery />

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
