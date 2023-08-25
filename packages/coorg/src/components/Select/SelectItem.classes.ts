import { SelectItemVariations, cn } from '@reactds/core';
import { cva } from 'class-variance-authority';
import { NS } from '../../constants';

export const selectItemVariations = cva<SelectItemVariations>(
  cn(
    `${NS}-select--item`,
    'relative flex w-full rounded-md data-[highlighted]:glass hover:cursor-pointer mb-1 last:mb-0  select-none items-center py-0.5 px-2 text-sm outline-none data-[state="checked"]:brightness-125 data-[state="checked"]:glass data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ',
  ),
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
