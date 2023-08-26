import { VariantProps, cva } from 'class-variance-authority';
import { componentIntents, componentSizes } from './constants';
export type ComponentVariations<T extends Record<string, string>> = {
	[key in keyof T]: Record<T[key], string>;
};

export type ComponentSize = (typeof componentSizes)[number];
export type ComponentIntent = (typeof componentIntents)[number];

export type VariationsType<T> = ReturnType<typeof cva<T>>;

export type CommonProps<T> = VariantProps<VariationsType<T>> & {
	variations?: VariationsType<T>;
	asChild?: boolean;
};

export type IconProps = {
	icon?: React.ReactNode;
	hideIcon?: boolean;
	iconClassName?: string;
	iconStyle?: React.CSSProperties;
};

export type IconContainerProps = {
	iconContainerClassName?: string;
	iconContainerStyle?: React.CSSProperties;
};

export type IconWithContainerProps = IconProps & IconContainerProps;
