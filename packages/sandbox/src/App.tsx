import React, { useState } from 'react';
import { ButtonGallery } from './Galleries/ButtonGallery';
import { SelectGallery } from './Galleries/SelectGallery';
import { Select, Background } from '@reactds/coorg';
import { pascalToTitleCase } from './utils/string';
import { BadgeGallery } from './Galleries/BadgeGallery';

const COMPONENT_NAMES = ['button', 'select', 'badge'] as const;
type ComponentName = (typeof COMPONENT_NAMES)[number];

const GALLERY_MAP: Record<ComponentName, React.FC> = {
	button: ButtonGallery,
	select: SelectGallery,
	badge: BadgeGallery,
} as const;

const DEFAULT_COMPONENT_NAME =
	(localStorage.getItem('current_component') as ComponentName) || 'button';

function App() {
	const [currentComponentName, setCurrentComponentName] =
		useState<ComponentName>(DEFAULT_COMPONENT_NAME);

	const CurrentGallery = GALLERY_MAP[currentComponentName];

	return (
		<Background>
			<>
				<Select
					onValueChange={(value) => {
						localStorage.setItem('current_component', value);
						setCurrentComponentName(value as ComponentName);
					}}
					placeholder='Choose Gallery'
					defaultValue={DEFAULT_COMPONENT_NAME}
					style={{
						marginBottom: '2.5rem',
					}}
				>
					{COMPONENT_NAMES.map((componentName) => (
						<Select.Item key={componentName} value={componentName}>
							{pascalToTitleCase(GALLERY_MAP[componentName].displayName || '')}
						</Select.Item>
					))}
				</Select>
				<CurrentGallery />
			</>
		</Background>
	);
}

export default App;
