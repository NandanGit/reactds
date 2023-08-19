import React from 'react';
import { clsx } from 'clsx';
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
	spread = false,
	transparent = false,
	horizontal = false,
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
			{/* <Surface
				className={clsx(
					className,
					{
						'flex justify-center items-center gap-2': true,
						'flex-row': horizontal && !reverse,
						'flex-col': !horizontal && !reverse,
						'flex-row-reverse': horizontal && reverse,
						'flex-col-reverse': !horizontal && reverse,
					}
					// 'min-w-[80%] min-h-[80%]',
				)}
			> */}
			{children}
		</Surface>
	);
};

export interface PortionProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	horizontal?: boolean;
	reverse?: boolean;
}

const Portion: React.FC<PortionProps> = ({
	children,
	className = '',
	title,
	horizontal = false,
	reverse = false,
	...props
}) => {
	return (
		<div
			className={clsx(className, 'flex justify-between items-center gap-2', {
				'flex-row': horizontal && !reverse,
				'flex-col': !horizontal && !reverse,
				'flex-row-reverse': horizontal && reverse,
				'flex-col-reverse': !horizontal && reverse,
			})}
			{...props}
		>
			{title && (
				<span className='text-center font-bold tracking-wider uppercase'>
					{title}
				</span>
			)}
			{children}
		</div>
	);
};

Container.Portion = Portion;
export { Container };
