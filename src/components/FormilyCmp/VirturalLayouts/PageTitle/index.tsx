import { createVirtualBox } from '@formily/antd';
import styles from './pageTitle.scss';

export interface PageTitleProps {
  title?: string;
}

export const PageTitle = createVirtualBox('PageTitle', (props: PageTitleProps) => {
  const { title } = props;
  console.log(props);
  return (
    <div className={styles.customLayout}>
      {title && <div className={styles.title}>{title}</div>}
    </div>
  );
});
