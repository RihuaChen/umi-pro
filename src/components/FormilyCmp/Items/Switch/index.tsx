import { Switch as FormilySwitch } from 'antd';
import { SwitchChangeEventHandler } from 'antd/lib/switch';
import { memo } from 'react';
import styles from './switch.scss';

const MobileSwitch = (props: {
  title: string;
  value: boolean;
  disabled: boolean;
  onChange: SwitchChangeEventHandler;
}) => {
  const { title, value, onChange, ...options } = props;
  return (
    <div className={styles.switchWrapper}>
      <span className={styles.title}>{title}</span>
      <FormilySwitch {...options} checked={value} onChange={onChange} />
    </div>
  );
};

export const Switch = memo(MobileSwitch);
