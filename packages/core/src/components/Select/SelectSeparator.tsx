import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '../../lib/utils';
import { SelectSeparatorProps } from './SelectSeparator.types';

export const SelectSeparator = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Separator>,
	SelectSeparatorProps
>(({ className, intent, variations, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={cn(
			// '-mx-1 my-1 h-px bg-muted',
			variations?.({ intent }),
			className
		)}
		{...props}
	/>
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
