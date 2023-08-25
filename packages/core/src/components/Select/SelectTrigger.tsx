import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cn } from '../../lib/utils';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { SelectTriggerProps } from './SelectTrigger.types';

export const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	SelectTriggerProps
>(
	(
		{
			className,
			children,
			variant,
			intent,
			variations,
			icon,
			hideIcon = false,
			iconClassName,
			iconStyle,
			...props
		},
		ref
	) => (
		<SelectPrimitive.Trigger
			ref={ref}
			className={cn(
				// 'flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
				variations?.({ variant, intent }),
				className
			)}
			{...props}
		>
			{children}
			{!hideIcon && (
				<SelectPrimitive.Icon asChild>
					{icon || (
						<CaretSortIcon
							//  className='h-4 w-4 opacity-50'
							className={iconClassName}
							style={iconStyle}
						/>
					)}
				</SelectPrimitive.Icon>
			)}
		</SelectPrimitive.Trigger>
	)
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
