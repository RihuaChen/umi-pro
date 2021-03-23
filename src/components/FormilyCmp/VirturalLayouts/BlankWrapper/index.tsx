import { ReactNode } from 'react';
import { createVirtualBox } from '@formily/react-schema-renderer';

export interface BlankWrapperProps {
  margin?: string;
  children?: ReactNode;
}

export const BlankWrapper = createVirtualBox('blank-wrapper', (props: BlankWrapperProps) => {
  const { children, margin = 0 } = props;

  return <div style={{ margin }}>{children}</div>;
});
