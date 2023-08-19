import React from 'react';
import { Surface } from '@reactds/coorg';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	horizontal?: boolean;
	reverse?: boolean;
	gap?: number | string;
	spread?: boolean;
	transparent?: boolean;
}

const Container: React.FC<ContainerProps> & {
	Portion: typeof Portion;
} = ({
	// className = '',
	style = {},
	children,
	gap = '1rem',
	spread = true,
	transparent = false,
	horizontal = true,
	reverse = false,
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
				// flex: '1',
				gap,

				...style,
			}}
			{...props}
		>
			{children}
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
