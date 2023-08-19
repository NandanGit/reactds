import { SelectTriggerVariations } from '@reactds/core';
import { cva } from 'class-variance-authority';
import { NS } from '../../constants';

export const selectTriggerVariations = cva<SelectTriggerVariations>(
  `${NS}-select--trigger`,
  {
    variants: {
      intent: {
        default: `${NS}-default `,
        primary: `${NS}-primary `,
        secondary: `${NS}-secondary `,
        info: `${NS}-info `,
        warning: `${NS}-warning `,
        success: `${NS}-success `,
        danger: `${NS}-danger `,
      },
      variant: {
        filled: `${NS}-filled `,
        ghost: `${NS}-ghost `,
      },
    },
  },
);
