import {
  Select as PrimitiveSelect,
  SelectItemProps as PrimitiveSelectItemProps,
  cn,
} from '@reactds/core';

import { forwardRef } from 'react';
import { selectItemVariations } from './SelectItem.classes';

export type SelectItemProps = PrimitiveSelectItemProps & {};

export const SelectItem = forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Item>,
  SelectItemProps
>(({ indicatorClassName, ...props }, ref) => {
  return (
    <PrimitiveSelect.Item
      variations={selectItemVariations}
      indicatorClassName={cn(
        'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
        indicatorClassName,
      )}
      {...props}
      ref={ref}
    />
  );
});
