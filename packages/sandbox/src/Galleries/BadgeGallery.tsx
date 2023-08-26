import React, { useState } from 'react';
import { Container } from '../Container';
import { Badge, BadgeProps, Select } from '@reactds/coorg';

export interface BadgeGalleryProps
	extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export const BadgeGallery: React.FC<BadgeGalleryProps> = () => {
	const variants: BadgeProps['variant'][] = [
		'filled',
		'soft',
		'outline',
		// 'inline-link',
	];
	const pillVariants: BadgeProps['variant'][] = [
		'outline',
		'soft',
		'filled', //
	];
	const intents: BadgeProps['intent'][] = [
		'default',
		'primary',
		'secondary',
		'success',
		'danger',
		'info',
		'warning',
	];

	// const badgeSize:  = 'lg';
	const [badgeSize, setBadgeSize] = useState<BadgeProps['size']>('md');

	return (
		<Container>
			<Select
				triggerProps={{
					style: {
						position: 'absolute',
						bottom: '100%',
						transform: 'translateY(-1rem)',
						right: 0,
					},
				}}
				defaultValue='md'
				// intent='info'
				// contentIntent='info'
				onValueChange={(value) => setBadgeSize(value as typeof badgeSize)}
			>
				<Select.Item value='sm'>Small</Select.Item>
				<Select.Item value='md'>Medium</Select.Item>
				<Select.Item value='lg'>Large</Select.Item>
			</Select>
			{[
				<Container.Portion style={{ alignItems: 'flex-end' }} key='names'>
					{[
						...variants.map((variant) => (
							<Badge
								size={badgeSize}
								// {...{ variant }}
								// className='capitalize'
								variant='ghost'
								disabled
								style={{ textTransform: 'uppercase' }}
								key={variant}
							>
								{variant}
							</Badge>
						)),
						...pillVariants.map((variant) => (
							<Badge
								size={badgeSize}
								// {...{ variant }}
								// className='capitalize'
								variant='ghost'
								disabled
								style={{ textTransform: 'uppercase' }}
								key={variant + '-pill'}
							>
								pill {variant}
							</Badge>
						)),
					]}
				</Container.Portion>,
				...intents.map((intent) => (
					<Container.Portion style={{ alignItems: 'stretch' }} key={intent}>
						{[
							...variants.map((variant) => (
								<Badge
									size={badgeSize}
									{...{ variant, intent }}
									className='capitalize'
									key={variant}
								>
									{intent}
								</Badge>
							)),
							...pillVariants.map((variant) => (
								<Badge
									size={badgeSize}
									pill
									{...{ variant, intent }}
									className='capitalize'
									key={variant + '-pill'}
								>
									{intent}
								</Badge>
							)),
						]}
					</Container.Portion>
				)),
			]}
		</Container>
	);
};

BadgeGallery.displayName = 'BadgeGallery';
