import {
  Select as PrimitiveSelect,
  SelectTriggerProps as PrimitiveSelectTriggerProps,
} from '@reactds/core';

import { forwardRef } from 'react';
import { selectTriggerVariations } from './SelectTrigger.classes';

export type SelectTriggerProps = PrimitiveSelectTriggerProps & {};

export const SelectTrigger = forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Trigger>,
  SelectTriggerProps
>(({ ...props }, ref) => {
  return (
    <PrimitiveSelect.Trigger
      variations={selectTriggerVariations}
      {...props}
      ref={ref}
    />
  );
});
