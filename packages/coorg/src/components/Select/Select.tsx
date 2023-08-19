// import React from 'react';
import { Select as PrimitiveSelect } from '@reactds/core';
import { SelectTrigger } from './SelectTrigger';
import { SelectItem } from './SelectItem';
import { SelectContent } from './SelectContent';
import { SelectLabel } from './SelectLabel';
import { SelectSeparator } from './SelectSeparator';

export type SelectProps = React.ComponentPropsWithoutRef<
  typeof PrimitiveSelect.Root
>;
const Select: typeof PrimitiveSelect.Root & {
  Root: typeof PrimitiveSelect.Root;
  Trigger: typeof SelectTrigger;
  Content: typeof SelectContent;
  Item: typeof SelectItem;
  Label: typeof SelectLabel;
  Separator: typeof SelectSeparator;
  Group: typeof PrimitiveSelect.Group;
  Value: typeof PrimitiveSelect.Value;
} = ({ children, ...props }) => {
  return (
    <PrimitiveSelect.Root {...props}>
      <SelectTrigger>
        <PrimitiveSelect.Value placeholder="Placeholder" />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </PrimitiveSelect.Root>
  );
};

Select.Root = PrimitiveSelect.Root;
Select.Trigger = SelectTrigger;
Select.Content = SelectContent;
Select.Item = SelectItem;
Select.Label = SelectLabel;
Select.Separator = SelectSeparator;
Select.Group = PrimitiveSelect.Group;
Select.Value = PrimitiveSelect.Value;

export { Select };
