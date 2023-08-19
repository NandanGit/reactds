import { SelectContentVariations } from '@reactds/core';
import { cva } from 'class-variance-authority';
import { NS } from '../../constants';

export const selectContentVariations = cva<SelectContentVariations>(
  `${NS}-select--content`,
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
