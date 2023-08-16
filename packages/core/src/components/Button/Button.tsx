import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '../../lib/utils';
import { CommonProps } from '../types';
import { ButtonVariations } from './Button.types';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		CommonProps<ButtonVariations> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant, size, intent, variations, asChild = false, ...props },
		ref
	) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(variations?.({ variant, size, intent, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Button.displayName = 'Button';

export { Button };
