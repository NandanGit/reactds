import React, { useState } from 'react';

import { Badge, BadgeProps } from '@reactds/coorg';
import { Container } from '../components/Container';

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
	const [badgeSize, setBadgeSize] =
		useState<Exclude<BadgeProps['size'], null | undefined>>('md');

	const [showRemoveIcon, setShowRemoveIcon] = useState(true);

	const [badgeShape, setBadgeShape] = useState<'pill' | 'normal'>('normal');

	const labelStyle: React.CSSProperties = {
		textTransform: 'uppercase',
		background: 'none',
		backdropFilter: 'none',
		boxShadow: 'none',
		opacity: 0.5,
	};

	return (
		<Container
			controls={[
				{
					type: 'select',
					name: 'Size',
					state: badgeSize,
					setState: setBadgeSize,
					options: [
						['sm', 'Small'],
						['md', 'Medium'],
						['lg', 'Large'],
					],
				},
				{
					name: 'Show Remove Icon',
					type: 'switch',
					state: showRemoveIcon,
					setState: setShowRemoveIcon,
				},
				{
					type: 'select',
					name: 'Shape',
					state: badgeShape,
					setState: setBadgeShape,
					options: ['pill', 'normal'],
				},
			]}
		>
			{variants.map((variant) => (
				<Container.Portion key={variant} style={{ alignItems: 'stretch' }}>
					<Badge size={badgeSize} style={labelStyle} key={variant}>
						{variant}
					</Badge>
					{intents.map((intent) => (
						<Badge
							key={intent}
							size={badgeSize}
							{...{ intent, variant, showRemoveIcon }}
							pill={badgeShape === 'pill'}
							style={{ textTransform: 'capitalize' }}
							onRemove={() => {
								console.log(
									`Delete request from Badge with intent: ${intent} and variant: ${variant}`
								);
							}}
						>
							{intent}
						</Badge>
					))}
				</Container.Portion>
			))}
		</Container>
	);
};

BadgeGallery.displayName = 'BadgeGallery';
