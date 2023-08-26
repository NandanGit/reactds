import React from 'react';
import { Surface } from '@reactds/coorg';

import './Container.css';
import { Control } from './control/Control';
import { ContainerControl } from './control/Control.types';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	horizontal?: boolean;
	reverse?: boolean;
	gap?: number | string;
	spread?: boolean;
	transparent?: boolean;

	controls?: ContainerControl[];
}

const Container: React.FC<ContainerProps> & {
	Portion: typeof Portion;
} = ({
	// className = '',
	style = {},
	children,
	gap = '1rem',
	spread = false,
	transparent = false,
	horizontal = true,
	reverse = false,

	controls,
	...props
}) => {
	return (
		<Surface
			style={{
				...(spread ? { minWidth: '80%', height: '80%' } : {}),
				...(transparent
					? {
							background: 'transparent',
							backdropFilter: 'none',
							boxShadow: 'none',
							padding: 0,
					  }
					: {}),
				flexDirection: `${horizontal ? 'row' : 'column'}${
					reverse ? '-reverse' : ''
				}` as React.CSSProperties['flexDirection'],
				// flexDirection: 'column-reverse',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: controls ? '5rem' : 0,
				// flex: '1',
				gap,

				...style,
			}}
			{...props}
		>
			{children}

			{/* Controls */}
			{controls ? (
				<div
					style={{
						position: 'absolute',
						bottom: '100%',
						transform: 'translateY(-0.5rem)',
						right: 0,

						display: 'flex',
						alignItems: 'stretch',
						flexDirection: 'row-reverse',
						gap: '0.5rem',
					}}
				>
					{controls?.map((control) => (
						<Control key={control.name} control={control} />
					))}
				</div>
			) : null}
		</Surface>
	);
};

export interface PortionProps extends ContainerProps {}

const Portion: React.FC<PortionProps> = ({
	children,
	spread = false,
	horizontal = false,
	transparent = true,
	...props
}) => {
	return (
		<Container {...{ spread, horizontal, transparent }} {...props}>
			{children}
		</Container>
	);
};

Container.Portion = Portion;
export { Container };
