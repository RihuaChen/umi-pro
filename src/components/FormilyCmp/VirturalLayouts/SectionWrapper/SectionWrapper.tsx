import { ReactNode } from 'react';
import { createVirtualBox } from '@formily/react-schema-renderer';
import styles from './SectionWrapper.scss';

export interface SectionWrapperProps {
  icon?: ReactNode;
  title?: string;
  desc?: string;
  children?: ReactNode;
}

export const SectionWrapper = createVirtualBox('section-wrapper', (props: SectionWrapperProps) => {
  const { children, title, icon, desc } = props;

  return (
    <div className={styles.customLayout}>
      {title && (
        <div className={styles.titleWrapper}>
          {icon && <span className={styles.iconWrapper}>{icon}</span>}
          <span className={styles.title}>{title}</span>
        </div>
      )}
      {desc && <div className={styles.desc}>{desc}</div>}
      {children}
    </div>
  );
});
