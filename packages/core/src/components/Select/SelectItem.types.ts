import * as SelectPrimitive from '@radix-ui/react-select';
import { CommonProps, ComponentIntent, ComponentVariations } from '../types';
import React from 'react';

export interface SelectItemProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
		CommonProps<SelectItemVariations> {
	indicatorClassName?: string;
	indicatorStyle?: React.CSSProperties;
	indicatorIconClassName?: string;
	indicatorIconStyle?: React.CSSProperties;
	indicatorIcon?: React.ReactNode;
	showIndicator?: boolean;

	itemContentClassName?: string;
	itemContentStyle?: React.CSSProperties;

	showIntentInContent?: boolean;
}

export type SelectItemIntent = ComponentIntent;

export type SelectItemVariations = ComponentVariations<{
	intent: SelectItemIntent;
}>;
