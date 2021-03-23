import { createFormActions, FormPath, IFieldState } from '@formily/react-schema-renderer';

const createLinkageUtils = () => {
  const { setFieldState } = createFormActions();
  const linkage = <T>(key: string, defaultValue?: T) => (path: string, value?: T) => {
    setFieldState(path, (state: IFieldState) => {
      FormPath.setIn(state, key, value ?? defaultValue);
    });
  };
  return {
    hide: linkage('visible', false),
    show: linkage('visible', true),
    enum: linkage('props.enum', []),
    loading: linkage('loading', true),
    loaded: linkage('loading', false),
    cmpLoading: linkage('props.x-component-props.loading', false),
    editable: linkage('editable', false),
    disabled: linkage('props.x-component-props.disabled', true),
    enabled: linkage('props.x-component-props.disabled', false),
    options: linkage('props.x-component-props.options'),
    isCalc: linkage('props.x-component-props.isCalc', false),
    isCorrect: linkage('props.x-component-props.isCorrect', false),
    bgColor: linkage('props.x-component-props.bgColor', '#fff'),
    dashInputType: linkage('props.x-component-props.dashInputType'),
    rules: linkage('props.x-rules'),
    value: linkage('value'),
    sort: linkage('sort'),
    toggleRequire: linkage('props.x-rules'),
    maxLength: linkage('props.x-component-props.maxLength'),
    defaultValue: linkage('props.x-component-props.defaultValue'),
    errors: linkage('errors'),
    changeComponentType: linkage('props.x-component'),
    showNumbers: linkage('props.x-component-props.showNumbers'),
    maxDate: linkage('props.x-component-props.maxDate'),
    minDate: linkage('props.x-component-props.minDate'),
    tips: linkage('props.x-component-props.tips'),
  };
};

export { createLinkageUtils };
