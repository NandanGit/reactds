import { SelectLabelVariations } from '@reactds/core';
import { cva } from 'class-variance-authority';
import { NS } from '../../constants';

export const selectLabelVariations = cva<SelectLabelVariations>(
  `${NS}-select--label px-2 py-1.5 text-sm font-semibold text-mute`,
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
