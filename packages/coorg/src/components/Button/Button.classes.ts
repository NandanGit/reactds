import { ButtonVariations } from '@reactds/core';
import { cva } from 'class-variance-authority';

export const buttonVariations = cva<ButtonVariations>('coorg-btn', {
	variants: {
		variant: {
			default: 'coorg-btn-default',
			outline: 'coorg-btn-outline',
			ghost: 'coorg-btn-ghost',
			link: 'coorg-btn-link',

			// Custom
			minimal: 'coorg-btn-minimal',
		},
		size: {
			sm: 'coorg-btn-sm',
			md: 'coorg-btn-md',
			lg: 'coorg-btn-lg',
		},
		intent: {
			default: 'coorg-btn-default',
			primary: 'coorg-btn-primary',
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
		intent: 'primary',
	},
});
