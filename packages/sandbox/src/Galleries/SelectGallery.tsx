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
						<Select.Root key={intent} defaultOpen={intent === 'success'}>
							<Select.Trigger {...{ intent, variant }}>
								<Select.Value placeholder='Theme' />
							</Select.Trigger>
							<Select.Content>
								<Select.Item value='dark'>Dark</Select.Item>
								<Select.Item value='light'>Light</Select.Item>
								<Select.Item value='system'>System</Select.Item>
							</Select.Content>
						</Select.Root>
					))}
				</Container.Portion>
			))}
		</Container>
	);
};

SelectGallery.displayName = 'SelectGallery';
