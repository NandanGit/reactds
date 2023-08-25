import {
  Select as PrimitiveSelect,
  SelectContentProps as PrimitiveSelectContentProps,
  cn,
} from '@reactds/core';

import { forwardRef } from 'react';
import { selectContentVariations } from './SelectContent.classes';

export type SelectContentProps = PrimitiveSelectContentProps & {};

export const SelectContent = forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Content>,
  SelectContentProps
>(({ className, viewPortClassName, position, ...props }, ref) => {
  return (
    <PrimitiveSelect.Content
      variations={selectContentVariations}
      className={cn(
        {
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1':
            position === 'popper',
        },
        className,
      )}
      viewPortClassName={cn(
        'p-1',
        {
          'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]':
            position === 'popper',
        },
        viewPortClassName,
      )}
      {...props}
      ref={ref}
    />
  );
});
