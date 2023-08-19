import React from 'react';
import { Container } from '../Container';
import { Select } from '@reactds/coorg';

export interface SelectGalleryProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export const SelectGallery: React.FC<SelectGalleryProps> = () => {
	return (
		<Container>
			<Select>
				<Select.Item value='dark'>Dark</Select.Item>
				<Select.Item value='light'>Light</Select.Item>
				<Select.Item value='system'>System</Select.Item>
			</Select>
			<Select.Root>
				<Select.Trigger>
					<Select.Value placeholder='Theme' />
				</Select.Trigger>
				<Select.Content>
					<Select.Item value='dark'>Dark</Select.Item>
					<Select.Item value='light'>Light</Select.Item>
					<Select.Item value='system'>System</Select.Item>
				</Select.Content>
			</Select.Root>
		</Container>
	);
};

SelectGallery.displayName = 'SelectGallery';
