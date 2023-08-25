import {
  Select as PrimitiveSelect,
  SelectTriggerProps as PrimitiveSelectTriggerProps,
  cn,
} from '@reactds/core';

import { forwardRef } from 'react';
import { selectTriggerVariations } from './SelectTrigger.classes';

export type SelectTriggerProps = PrimitiveSelectTriggerProps & {};

export const SelectTrigger = forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Trigger>,
  SelectTriggerProps
>(({ iconClassName, ...props }, ref) => {
  return (
    <PrimitiveSelect.Trigger
      variations={selectTriggerVariations}
      iconClassName={cn('ml-2 opacity-60', iconClassName)}
      {...props}
      ref={ref}
    />
  );
});
