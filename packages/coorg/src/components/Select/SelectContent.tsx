import {
  Select as PrimitiveSelect,
  SelectContentProps as PrimitiveSelectContentProps,
} from '@reactds/core';

import { forwardRef } from 'react';
import { selectContentVariations } from './SelectContent.classes';

export type SelectContentProps = PrimitiveSelectContentProps & {};

export const SelectContent = forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Content>,
  SelectContentProps
>(({ ...props }, ref) => {
  return (
    <PrimitiveSelect.Content
      variations={selectContentVariations}
      {...props}
      ref={ref}
    />
  );
});
