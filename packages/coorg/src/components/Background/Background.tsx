import React from 'react';
import { cn } from '@reactds/core';
import { NS } from '../../constants';

export interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  opacity?: number;
}

export const Background: React.FC<BackgroundProps> = ({
  className,
  children,
  opacity = 0.5,
  ...props
}) => {
  return (
    <React.Fragment>
      {children}

      <div
        className={cn(
          `${NS}-bg`,
          'fixed w-screen h-screen overflow-hidden bg-black top-0 left-0 -z-10',
          className,
        )}
        {...props}
      >
        <div
          className={cn(`${NS}-animation-container`, 'relative w-full h-full')}
          style={{ opacity }}
        >
          <div className={`${NS}-gradient ${NS}-gradient--1`} />
          <div className={`${NS}-gradient ${NS}-gradient--2`} />
          <div className={`${NS}-gradient ${NS}-gradient--3`} />
          <div className={`${NS}-gradient ${NS}-gradient--4`} />
          <div className={`${NS}-gradient ${NS}-gradient--5`} />
        </div>
      </div>
    </React.Fragment>
  );
};
