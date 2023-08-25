import * as SelectPrimitive from '@radix-ui/react-select';
import { CommonProps, ComponentIntent, ComponentVariations } from '../types';
import React from 'react';

export interface SelectContentProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
		CommonProps<SelectContentVariations> {
	viewPortClassName?: string;
	viewPortStyle?: React.CSSProperties;
}

export type SelectContentIntent = ComponentIntent;

export type SelectContentVariations = ComponentVariations<{
	intent: SelectContentIntent;
}>;
