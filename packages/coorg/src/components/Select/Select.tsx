// import React from 'react';
import {
  Select as PrimitiveSelect,
  SelectContentProps,
  SelectTriggerProps,
} from '@reactds/core';
import { SelectTrigger } from './SelectTrigger';
import { SelectItem } from './SelectItem';
import { SelectContent } from './SelectContent';
import { SelectLabel } from './SelectLabel';
import { SelectSeparator } from './SelectSeparator';

export type SelectProps = React.ComponentPropsWithoutRef<
  typeof PrimitiveSelect.Root
> & {
  triggerProps?: SelectTriggerProps;
  contentProps?: SelectContentProps;

  // Trigger props
  intent?: SelectTriggerProps['intent'];
  variant?: SelectTriggerProps['variant'];
  hideIcon?: SelectTriggerProps['hideIcon'];

  // Content props
  contentIntent?: SelectContentProps['intent'];
  contentPosition?: SelectContentProps['position'];

  // Value props
  placeholder?: string;
};

const Select: React.FC<SelectProps> & {
  Root: typeof PrimitiveSelect.Root;
  Trigger: typeof SelectTrigger;
  Content: typeof SelectContent;
  Item: typeof SelectItem;
  Label: typeof SelectLabel;
  Separator: typeof SelectSeparator;
  Group: typeof PrimitiveSelect.Group;
  Value: typeof PrimitiveSelect.Value;
} = ({
  triggerProps,
  contentProps,
  intent,
  variant,
  hideIcon,
  contentIntent = 'default',
  contentPosition = 'popper',
  placeholder,
  children,
  ...props
}) => {
  return (
    <PrimitiveSelect.Root {...props}>
      <SelectTrigger intent={intent} variant={variant} {...triggerProps}>
        <PrimitiveSelect.Value placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent
        intent={contentIntent}
        position={contentPosition}
        {...contentProps}
      >
        {children}
      </SelectContent>
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
