import {
  Select as PrimitiveSelect,
  SelectLabelProps as PrimitiveSelectLabelProps,
} from '@reactds/core';

import { forwardRef } from 'react';
import { selectLabelVariations } from './SelectLabel.classes';

export type SelectLabelProps = PrimitiveSelectLabelProps & {};

export const SelectLabel = forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Label>,
  SelectLabelProps
>(({ ...props }, ref) => {
  return (
    <PrimitiveSelect.Label
      variations={selectLabelVariations}
      {...props}
      ref={ref}
    />
  );
});
