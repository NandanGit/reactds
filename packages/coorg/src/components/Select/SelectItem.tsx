import {
  Select as PrimitiveSelect,
  SelectItemProps as PrimitiveSelectItemProps,
} from '@reactds/core';

import { forwardRef } from 'react';
import { selectItemVariations } from './SelectItem.classes';

export type SelectItemProps = PrimitiveSelectItemProps & {};

export const SelectItem = forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Item>,
  SelectItemProps
>(({ ...props }, ref) => {
  return (
    <PrimitiveSelect.Item
      variations={selectItemVariations}
      {...props}
      ref={ref}
    />
  );
});
