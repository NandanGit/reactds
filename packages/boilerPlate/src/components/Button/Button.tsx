import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({
	className = '',
	children,
	...props
}) => {
	return (
		<button className={`Button ${className}`} {...props}>
			{children}
		</button>
	);
};
