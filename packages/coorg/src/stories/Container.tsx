import React from 'react';
import backgroundImage from '../stories/assets/leaves.png';
import backgroundSvg from '../stories/assets/bg.svg';
import { Surface } from '../components/Surface/Surface';
import { cn } from '@reactds/core';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  horizontal?: boolean;
  reverse?: boolean;
  showPattern?: boolean;
}

const Container: React.FC<ContainerProps> & {
  Portion: typeof Portion;
} = ({
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
      <Surface
        className={cn(
          {
            'flex justify-center items-center gap-2': true,
            'flex-row': horizontal && !reverse,
            'flex-col': !horizontal && !reverse,
            'flex-row-reverse': horizontal && reverse,
            'flex-col-reverse': !horizontal && reverse,
          },
          className,
          // 'min-w-[80%] min-h-[80%]',
        )}
      >
        {children}
      </Surface>
      {/* </div> */}
    </div>
  );
};

export interface PortionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  horizontal?: boolean;
  reverse?: boolean;
}

const Portion: React.FC<PortionProps> = ({
  children,
  className = '',
  title,
  horizontal = false,
  reverse = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex justify-between items-center gap-2',
        {
          'flex-row': horizontal && !reverse,
          'flex-col': !horizontal && !reverse,
          'flex-row-reverse': horizontal && reverse,
          'flex-col-reverse': !horizontal && reverse,
        },
        className,
      )}
      {...props}
    >
      {title && (
        <span className="text-center font-bold tracking-wider uppercase">
          {title}
        </span>
      )}
      {children}
    </div>
  );
};

Container.Portion = Portion;
export { Container };
