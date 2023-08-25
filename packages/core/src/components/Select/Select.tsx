import * as SelectPrimitive from '@radix-ui/react-select';
import { SelectTrigger } from './SelectTrigger';
import { SelectContent } from './SelectContent';
import { SelectItem } from './SelectItem';
import { SelectLabel } from './SelectLabel';
import { SelectSeparator } from './SelectSeparator';

const SelectRoot = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const Select: typeof SelectRoot & {
	Root: typeof SelectRoot;
	Group: typeof SelectGroup;
	Value: typeof SelectValue;
	Trigger: typeof SelectTrigger;
	Content: typeof SelectContent;
	Item: typeof SelectItem;
	Label: typeof SelectLabel;
	Separator: typeof SelectSeparator;
} = (props) => <SelectRoot {...props} />;

Select.Root = SelectRoot;
Select.Group = SelectGroup;
Select.Value = SelectValue;
Select.Trigger = SelectTrigger;
Select.Content = SelectContent;
Select.Item = SelectItem;
Select.Label = SelectLabel;
Select.Separator = SelectSeparator;

export { Select };
