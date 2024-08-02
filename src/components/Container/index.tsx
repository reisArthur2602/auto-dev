import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ContainerProps = {
  classname?: string;
  children: ReactNode;
};

export const Container = ({ classname, children }: ContainerProps) => {
  return (
    <div className={twMerge('max-w-7xl w-full mx-auto', classname)}>
      {children}
    </div>
  );
};
