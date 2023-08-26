import {
	CommonProps,
	ComponentIntent,
	ComponentSize,
	ComponentVariations,
	// VariationsType,
} from '../types';
import { badgeVariants } from './Badge.constants';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
	CommonProps<BadgeVariations> & {
		removeIcon?: React.ReactNode;
		hideRemoveIcon?: boolean;
		removeIconClassName?: string;
		removeIconStyle?: React.CSSProperties;
		removeIconContainerClassName?: string;
		removeIconContainerStyle?: React.CSSProperties;

		onRemove?: () => void;
	};

export type BadgeSize = ComponentSize;
export type BadgeIntent = ComponentIntent;
export type BadgeVariant = (typeof badgeVariants)[number];

export type BadgeVariations = ComponentVariations<{
	size: BadgeSize;
	intent: BadgeIntent;
	variant: BadgeVariant;
}>;
