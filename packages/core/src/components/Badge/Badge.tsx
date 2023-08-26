import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '../../lib/utils';
import { BadgeProps } from './Badge.types';
import { Cross2Icon } from '@radix-ui/react-icons';

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
	(
		{
			children,
			className,
			variant,
			size,
			intent,
			variations,
			asChild = false,

			removeIcon,
			showRemoveIcon = false,
			removeIconClassName,
			removeIconStyle,
			removeIconContainerClassName,
			removeIconContainerStyle,

			onRemove,

			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : 'span';
		return (
			<Comp
				className={cn(variations?.({ variant, size, intent }), className)}
				ref={ref}
				{...props}
			>
				{children}
				{showRemoveIcon && (
					<button
						className={removeIconContainerClassName}
						style={removeIconContainerStyle}
						onClick={onRemove}
					>
						{removeIcon || (
							<Cross2Icon
								className={removeIconClassName}
								style={removeIconStyle}
							/>
						)}
					</button>
				)}
			</Comp>
		);
	}
);

Badge.displayName = 'Badge';
