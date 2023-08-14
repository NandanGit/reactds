import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { buttonVariants } from './Button.style';
import { cn } from '../../lib/utils';
import { ButtonProps } from './Button.types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, intent, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, intent, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Button.displayName = 'Button';

export { Button };
