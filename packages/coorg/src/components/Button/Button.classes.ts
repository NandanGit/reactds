import { ButtonVariations } from '@reactds/core';
import { cva } from 'class-variance-authority';

export const buttonVariations = cva<ButtonVariations>(
  'coorg-btn glass inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors  disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer',
  {
    variants: {
      variant: {
        default: 'coorg-btn-default',
        outline: '!bg-transparent',
        ghost: 'coorg-btn-ghost',
        link: 'coorg-btn-link',

        // Custom
        minimal: 'coorg-btn-minimal',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-9 px-4 py-2',
        lg: 'coorg-btn-lg',
      },
      intent: {
        default: 'coorg-btn-intent-default',
        primary:
          'bg-primary-800/80 text-primary-100/80 hover:bg-primary-700/80 active:bg-primary-800/80',
        secondary: 'coorg-btn-secondary',
        info: 'coorg-btn-info',
        warning: 'coorg-btn-warning',
        success: 'coorg-btn-success',
        danger: 'coorg-btn-danger',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      intent: 'default',
    },
  }
);
