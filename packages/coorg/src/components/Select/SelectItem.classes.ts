import { SelectItemVariations } from '@reactds/core';
import { cva } from 'class-variance-authority';
import { NS } from '../../constants';

export const selectItemVariations = cva<SelectItemVariations>(
  `${NS}-select--item`,
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
