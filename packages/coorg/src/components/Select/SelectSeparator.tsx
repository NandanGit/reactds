import {
  Select as PrimitiveSelect,
  SelectSeparatorProps as PrimitiveSelectSeparatorProps,
} from '@reactds/core';

import { forwardRef } from 'react';
import { selectSeparatorVariations } from './SelectSeparator.classes';

export type SelectSeparatorProps = PrimitiveSelectSeparatorProps & {};

export const SelectSeparator = forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Separator>,
  SelectSeparatorProps
>(({ ...props }, ref) => {
  return (
    <PrimitiveSelect.Separator
      variations={selectSeparatorVariations}
      {...props}
      ref={ref}
    />
  );
});
