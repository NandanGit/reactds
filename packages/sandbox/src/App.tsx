import React, { useState } from 'react';
import './App.css';
import { ButtonGallery } from './Galleries/ButtonGallery';
import { SelectGallery } from './Galleries/SelectGallery';

const COMPONENTS = ['button', 'select'] as const;
type ComponentName = (typeof COMPONENTS)[number];

const GALLERY_MAP: Record<ComponentName, React.FC> = {
	button: ButtonGallery,
	select: SelectGallery,
} as const;

function App() {
	const [currentComponentName, setCurrentComponentName] =
		useState<ComponentName>('select');
	setCurrentComponentName; // Use this later to change the gallery

	const CurrentGallery = GALLERY_MAP[currentComponentName];

	return (
		<>
			<CurrentGallery />

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
