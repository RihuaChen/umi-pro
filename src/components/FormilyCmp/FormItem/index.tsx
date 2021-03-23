import { ISchemaFieldComponentProps } from '@formily/react-schema-renderer';
import styles from './formItem.scss';
import classnames from 'classnames';

const MobileFormItem = (props: ISchemaFieldComponentProps) => {
  const {
    children,
    schema,
    schema: { title, description },
    loading,
    invalid,
    errors,
    warnings,
  } = props;
  const componentProps = schema.getExtendsComponentProps() || {};
  const { marginBottom, fontSize, placeholder, desc } = componentProps;
  const messages = [].concat(errors || [], warnings || []);
  let status: string = '';
  const VALID_ERROR = 'error';
  const VALIDATING = 'validating';
  const VALID_WARNING = 'warning';
  if (loading) {
    status = VALIDATING;
  }
  if (invalid) {
    status = VALID_ERROR;
  }
  if (warnings && warnings.length) {
    status = VALID_WARNING;
  }
  return (
    <>
      <div className={classnames(styles.zmFormItem, status === VALID_ERROR && styles.zmFormHelper)}>
        {(title || placeholder) && (
          <div
            className={styles.title}
            style={{ marginBottom: marginBottom || 0, fontSize: fontSize || '16px' }}
          >
            {title || placeholder}
          </div>
        )}
        {children}
        {status === VALID_ERROR && (
          <div className={styles.zmError}>{messages.length ? messages : schema && description}</div>
        )}
      </div>
      {desc && <div className={styles.desc}>{desc}</div>}
    </>
  );
};

export default MobileFormItem;
