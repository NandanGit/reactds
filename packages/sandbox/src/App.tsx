import React, { useState } from 'react';
import './App.css';
import { ButtonGallery } from './Galleries/ButtonGallery';
import { SelectGallery } from './Galleries/SelectGallery';
import { Select } from '@reactds/coorg';
import { pascalToTitleCase } from './utils/string';

const COMPONENT_NAMES = ['button', 'select'] as const;
type ComponentName = (typeof COMPONENT_NAMES)[number];

const GALLERY_MAP: Record<ComponentName, React.FC> = {
	button: ButtonGallery,
	select: SelectGallery,
} as const;

const DEFAULT_COMPONENT_NAME =
	(localStorage.getItem('current_component') as ComponentName) || 'button';

function App() {
	const [currentComponentName, setCurrentComponentName] =
		useState<ComponentName>(DEFAULT_COMPONENT_NAME);
	setCurrentComponentName; // Use this later to change the gallery

	const CurrentGallery = GALLERY_MAP[currentComponentName];

	return (
		<>
			<Select.Root
				onValueChange={(value) => {
					localStorage.setItem('current_component', value);
					setCurrentComponentName(value as ComponentName);
				}}
				defaultValue={DEFAULT_COMPONENT_NAME}
			>
				<Select.Trigger
					style={
						{
							// position: 'absolute',
							// top: '1rem',
							// left: '50%',
							// transform: 'translateX(-50%)',
						}
					}
				>
					<Select.Value placeholder='Choose Gallery' />
				</Select.Trigger>
				<Select.Content position='popper'>
					{COMPONENT_NAMES.map((componentName) => (
						<Select.Item key={componentName} value={componentName}>
							{pascalToTitleCase(GALLERY_MAP[componentName].displayName || '')}
						</Select.Item>
					))}
				</Select.Content>
			</Select.Root>

			<CurrentGallery />
			{/* <CurrentGallery /> */}

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
