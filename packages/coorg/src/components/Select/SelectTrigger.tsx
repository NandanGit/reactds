import {
  Select as PrimitiveSelect,
  SelectTriggerProps as PrimitiveSelectTriggerProps,
} from '@reactds/core';

import { forwardRef } from 'react';
import { selectTriggerVariations } from './SelectTrigger.classes';
import { clsx } from 'clsx';

export type SelectTriggerProps = PrimitiveSelectTriggerProps & {};

export const SelectTrigger = forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Trigger>,
  SelectTriggerProps
>(({ iconClassName, ...props }, ref) => {
  return (
    <PrimitiveSelect.Trigger
      variations={selectTriggerVariations}
      iconClassName={clsx(iconClassName, 'ml-2')}
      {...props}
      ref={ref}
    />
  );
});
