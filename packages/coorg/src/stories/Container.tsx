import React from 'react';
import { clsx } from 'clsx';
import backgroundImage from '../stories/assets/leaves.png';
import backgroundSvg from '../stories/assets/bg.svg';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  horizontal?: boolean;
  reverse?: boolean;
  showPattern?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  className = '',
  // style = {},
  children,
  horizontal = false,
  reverse = false,
  showPattern = false,
  ...props
}) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: `url(${showPattern ? backgroundSvg : backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // ...style,
      }}
      className="flex justify-center items-center"
    >
      <div
        className={clsx(
          'Container',
          className,
          {
            'flex justify-center items-center': true,
            'flex-row': horizontal && !reverse,
            'flex-col': !horizontal && !reverse,
            'flex-row-reverse': horizontal && reverse,
            'flex-col-reverse': !horizontal && reverse,
            'space-x-reverse space-y-reverse': reverse,
          },
          horizontal ? 'space-x-2' : 'space-y-2',
          'min-w-[80%] min-h-[80%]',
          'glass', // Glass look
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};
