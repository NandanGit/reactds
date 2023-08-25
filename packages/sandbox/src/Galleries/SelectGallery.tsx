import React from 'react';
import { Container } from '../Container';
import { Button, Select, SelectTriggerProps } from '@reactds/coorg';

export interface SelectGalleryProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export const SelectGallery: React.FC<SelectGalleryProps> = () => {
	const variants: SelectTriggerProps['variant'][] = [
		'filled',
		'outline',
		'ghost',
	];
	const intents: SelectTriggerProps['intent'][] = [
		'default',
		'primary',
		'secondary',
		'success',
		'danger',
		'info',
		'warning',
	];
	return (
		<Container>
			{/* <Select disabled open>
				<Select.Item value='dark'>Dark</Select.Item>
				<Select.Item value='light'>Light</Select.Item>
				<Select.Item value='system'>System</Select.Item>
			</Select> */}
			{variants.map((variant) => (
				<Container.Portion key={variant} style={{ alignItems: 'stretch' }}>
					<Button
						size='sm'
						// full
						variant='ghost'
						disabled
						style={{ textTransform: 'uppercase' }}
						key={variant}
					>
						{variant}
					</Button>
					{intents.map((intent) => (
						<Select
							defaultValue='system'
							intent={intent}
							variant={variant}
							contentIntent={intent}
						>
							<Select.Item value='dark'>Dark</Select.Item>
							<Select.Item value='light'>Light </Select.Item>
							<Select.Item value='system'>System </Select.Item>
							<Select.Separator />
							<Select.Group>
								<Select.Label>Others</Select.Label>
								<Select.Item value='odyssey'>Odyssey</Select.Item>
								<Select.Item value='sea-shore'>Sea Shore</Select.Item>
								<Select.Item value='twilight'>Twilight</Select.Item>
							</Select.Group>
						</Select>
					))}
				</Container.Portion>
			))}
		</Container>
	);
};

SelectGallery.displayName = 'SelectGallery';
