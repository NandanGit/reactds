import React from 'react';

import { Button, ButtonProps } from '@reactds/coorg';
import { Container } from '../components/Container';

export interface ButtonGalleryProps
	extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export const ButtonGallery: React.FC<ButtonGalleryProps> = () => {
	const variants: ButtonProps['variant'][] = [
		'filled',
		'outline',
		'ghost',
		'link',
		// 'inline-link',
	];
	const pillVariants: ButtonProps['variant'][] = [
		'ghost',
		'outline',
		'filled', //
	];
	const intents: ButtonProps['intent'][] = [
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
			{[
				<Container.Portion style={{ alignItems: 'flex-end' }} key='names'>
					{[
						...variants.map((variant) => (
							<Button
								size='sm'
								// {...{ variant }}
								// className='capitalize'
								variant='ghost'
								disabled
								style={{ textTransform: 'uppercase' }}
								key={variant}
							>
								{variant}
							</Button>
						)),
						...pillVariants.map((variant) => (
							<Button
								size='sm'
								// {...{ variant }}
								// className='capitalize'
								variant='ghost'
								disabled
								style={{ textTransform: 'uppercase' }}
								key={variant + '-pill'}
							>
								pill {variant}
							</Button>
						)),
					]}
				</Container.Portion>,
				...intents.map((intent) => (
					<Container.Portion style={{ alignItems: 'stretch' }} key={intent}>
						{[
							...variants.map((variant) => (
								<Button
									size='sm'
									{...{ variant, intent }}
									className='capitalize'
									key={variant}
								>
									{intent}
								</Button>
							)),
							...pillVariants.map((variant) => (
								<Button
									size='sm'
									pill
									{...{ variant, intent }}
									className='capitalize'
									key={variant + '-pill'}
								>
									{intent}
								</Button>
							)),
						]}
					</Container.Portion>
				)),
			]}
		</Container>
	);
};

ButtonGallery.displayName = 'ButtonGallery';
