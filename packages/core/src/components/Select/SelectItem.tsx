import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cn } from '../../lib/utils';
import { CheckIcon } from '@radix-ui/react-icons';
import { SelectItemProps } from './SelectItem.types';

export const SelectItem = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	SelectItemProps
>(
	(
		{
			className,
			children,
			indicatorClassName,
			indicatorStyle,
			indicatorIconClassName,
			indicatorIconStyle,
			indicatorIcon,
			showIndicator = true,
			intent,
			showIntentInContent,
			variations,
			itemContentClassName,
			itemContentStyle,
			...props
		},
		ref
	) => (
		<SelectPrimitive.Item
			ref={ref}
			className={cn(
				// 'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				variations?.({ ...(showIntentInContent ? { intent } : {}) }),
				className
			)}
			{...props}
		>
			{/* <span className='absolute right-2 flex h-3.5 w-3.5 items-center justify-center'> */}
			{showIndicator && (
				<SelectPrimitive.ItemIndicator
					className={indicatorClassName}
					style={indicatorStyle}
				>
					{indicatorIcon || (
						<CheckIcon
							// className='h-4 w-4'
							className={indicatorIconClassName}
							style={indicatorIconStyle}
						/>
					)}
				</SelectPrimitive.ItemIndicator>
			)}
			{/* </span> */}
			<SelectPrimitive.ItemText
				className={itemContentClassName}
				style={itemContentStyle}
			>
				{children}
			</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	)
);
SelectItem.displayName = SelectPrimitive.Item.displayName;
