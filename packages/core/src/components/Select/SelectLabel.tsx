import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cn } from '../../lib/utils';
import { SelectLabelProps } from './SelectLabel.types';

export const SelectLabel = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Label>,
	SelectLabelProps
>(({ className, intent, variations, ...props }, ref) => (
	<SelectPrimitive.Label
		ref={ref}
		className={cn(
			// 'px-2 py-1.5 text-sm font-semibold',
			variations?.({ intent }),
			className
		)}
		{...props}
	/>
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
