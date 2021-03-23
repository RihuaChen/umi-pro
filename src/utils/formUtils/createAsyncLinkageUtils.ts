import { FormPath, IFieldState, ISchemaFormAsyncActions } from '@formily/react-schema-renderer';

const createAsyncLinkageUtils = (actions: ISchemaFormAsyncActions) => {
  const { setFieldState } = actions;
  const linkage = <T>(key: string, defaultValue?: T) => async (path: string, value?: T) => {
    await setFieldState(path, (state: IFieldState) => {
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
    value: linkage('value'),
    sort: linkage('sort'),
    errors: linkage('errors'),
    rules: linkage('props.x-rules'),
  };
};

export { createAsyncLinkageUtils };
