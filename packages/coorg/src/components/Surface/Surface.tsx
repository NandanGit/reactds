import React from 'react';
import { cn } from '@reactds/core';

export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Surface: React.FC<SurfaceProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={cn('glass rounded-xl p-4', className)} {...props}>
      {children}
    </div>
  );
};
