import React from 'react';
import { clsx } from 'clsx';

export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Surface: React.FC<SurfaceProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={clsx(className, 'glass p-4')} {...props}>
      {children}
    </div>
  );
};
