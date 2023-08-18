import * as SelectPrimitive from '@radix-ui/react-select';
import { CommonProps, ComponentIntent, ComponentVariations } from '../types';
import React from 'react';

export interface SelectSeparatorProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>,
		CommonProps<SelectSeparatorVariations> {}

export type SelectSeparatorIntent = ComponentIntent;

export type SelectSeparatorVariations = ComponentVariations<{
	intent: SelectSeparatorIntent;
}>;
