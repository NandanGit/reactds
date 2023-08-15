import {Button as RDSButton} from '@reactds/core';
import {forwardRef} from 'react';
import {buttonVariations} from './Button.classes';

export const Button: typeof RDSButton = forwardRef((props, ref) => {
  return <RDSButton ref={ref} variations={buttonVariations} {...props} />;
});
