import { VariantProps, cva } from 'class-variance-authority';
import {
  ComponentIntent,
  ComponentSize,
  ComponentVariations,
  // VariationsType,
} from '../../components/types';
import { buttonVariants } from './Button.constants';

export type ButtonSize = ComponentSize;
export type ButtonIntent = ComponentIntent;
export type ButtonVariant = typeof buttonVariants[number];

export type ButtonVariations = ComponentVariations<{
  size: ButtonSize;
  intent: ButtonIntent;
  variant: ButtonVariant;
}>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<ReturnType<typeof cva<ButtonVariations>>> {
  asChild?: boolean;
}
