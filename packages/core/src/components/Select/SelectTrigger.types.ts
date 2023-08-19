import * as SelectPrimitive from '@radix-ui/react-select';
import { CommonProps, ComponentIntent, ComponentVariations } from '../types';
import { selectTriggerVariants } from './SelectTrigger.constants';
import React from 'react';

export interface SelectTriggerProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
		CommonProps<SelectTriggerVariations> {
	icon?: React.ReactNode;
	hideIcon?: boolean;
	iconClassName?: string;
	iconStyle?: React.CSSProperties;
}

export type SelectTriggerIntent = ComponentIntent;
export type SelectTriggerVariant = (typeof selectTriggerVariants)[number];

export type SelectTriggerVariations = ComponentVariations<{
	intent: SelectTriggerIntent;
	variant: SelectTriggerVariant;
}>;
