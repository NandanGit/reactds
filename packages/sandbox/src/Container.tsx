import React from 'react';
import { Select, Surface } from '@reactds/coorg';
import { Any } from './types';
import { capitalize } from './utils/string';

export type ContainerControl<T extends string> = {
	state: T;
	setState: React.Dispatch<React.SetStateAction<Any>>;
	options: T[] | [T, string][];
};
export interface ContainerProps<TControlState extends string = string>
	extends React.HTMLAttributes<HTMLDivElement> {
	horizontal?: boolean;
	reverse?: boolean;
	gap?: number | string;
	spread?: boolean;
	transparent?: boolean;

	controls?: ContainerControl<TControlState>[];
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
						flexDirection: 'row-reverse',
						gap: '0.5rem',
					}}
				>
					{controls?.map((control) => {
						// const selectOptions = control.options.map(option => {
						// 		if(Array.isArray(option)){
						// 			return option
						// 		}
						// })
						return (
							<Select
								triggerProps={{
									style: {
										// position: 'absolute',
										// bottom: '100%',
										// transform: 'translateY(-1rem)',
										// right: 0,
									},
								}}
								value={control.state}
								// intent='info'
								// contentIntent='info'
								onValueChange={(value) => control.setState(value)}
							>
								{/* <Select.Item value='sm'>Small</Select.Item>
								<Select.Item value='md'>Medium</Select.Item>
								<Select.Item value='lg'>Large</Select.Item> */}
								{control.options.map((option) => {
									const selectOption = Array.isArray(option)
										? option
										: ([option, capitalize(option)] as const);
									return (
										<Select.Item value={selectOption[0]}>
											{selectOption[1]}
										</Select.Item>
									);
								})}
							</Select>
						);
					})}
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
