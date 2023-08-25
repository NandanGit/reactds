import * as SelectPrimitive from '@radix-ui/react-select';
import { CommonProps, ComponentIntent, ComponentVariations } from '../types';
import React from 'react';

export interface SelectLabelProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>,
		CommonProps<SelectLabelVariations> {}

export type SelectLabelIntent = ComponentIntent;

export type SelectLabelVariations = ComponentVariations<{
	intent: SelectLabelIntent;
}>;
