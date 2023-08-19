import { SelectSeparatorVariations } from '@reactds/core';
import { cva } from 'class-variance-authority';
import { NS } from '../../constants';

export const selectSeparatorVariations = cva<SelectSeparatorVariations>(
  `${NS}-select--separator`,
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
    },
  },
);
