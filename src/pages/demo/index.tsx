import { SchemaForm, FormEffectHooks, createAsyncFormActions } from '@formily/antd';
import { Input, Select, DatePicker } from '@formily/antd-components';
import { createLinkageUtils } from '@/utils/formUtils/createLinkageUtils';
import { Button } from 'antd';
import { RadioButton } from 'fCmp/Items';
// import MobileFormItem from 'fCmp/FormItem';
import { SectionWrapper, BlankWrapper, PageTitle } from 'fCmp/VirturalLayouts';
import styles from './styles.scss';
import schema from './schema';
import 'antd/dist/antd.less';

const actions = createAsyncFormActions();
const { onFieldValueChange$, onFormInit$ } = FormEffectHooks;
const occupation2Enum = [{ label: '司法人员', value: '1' }];
const occupation3Enum = [{ label: '律师', value: '1' }];

const Demo = () => {
  const chainEffects = () => {
    const linkage = createLinkageUtils();
    onFormInit$().subscribe(() => {
      // linkage.value('occupation1', '1');
    });
    onFieldValueChange$('occupation.occupation1').subscribe(({ value }) => {
      // console.log('occupation1');
      if (value === '1') {
        linkage.enum('occupation.occupation2', occupation2Enum);
      }
    });
    onFieldValueChange$('occupation.occupation2').subscribe(({ value }) => {
      if (value === '1') {
        linkage.enum('occupation.occupation3', occupation3Enum);
      }
    });
  };
  const submit = async () => {
    const { values } = await actions.submit();
    console.log('values:', values);
  };
  const components = {
    SectionWrapper,
    BlankWrapper,
    PageTitle,
    Input,
    RadioButton,
    DatePicker,
    Select,
  };
  return (
    <div className={styles.wrapper}>
      <SchemaForm
        // formItemComponent={MobileFormItem}
        actions={actions}
        initialValues={{
          occupation: {
            occupation1: '1',
            occupation2: '1',
          },
        }}
        components={components}
        effects={() => {
          chainEffects();
        }}
        schema={schema}
        expressionScope={{}}
      >
        <Button onClick={submit}>Submit</Button>
      </SchemaForm>
    </div>
  );
};
export default Demo;
