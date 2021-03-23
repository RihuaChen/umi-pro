// const testProps = {
//   'x-component': 'MobileInput',
//   'x-component-props': {},
//   'x-rules': [
//     {
//       required: true,
//       message: 'This field is required',
//     },
//   ],
// };
const schema = {
  type: 'object',
  properties: {
    LAYOUT_1: {
      key: 'LAYOUT_1',
      type: 'object',
      name: 'LAYOUT_1',
      'x-component': 'PageTitle',
      'x-component-props': {
        title: '被保人信息',
      },
    },
    BASE_INFO_LAYOUT: {
      key: 'BASE_INFO_LAYOUT',
      type: 'object',
      name: 'BASE_INFO_LAYOUT',
      'x-component': 'section-wrapper',
      'x-component-props': {
        title: '基本信息',
      },
      properties: {
        // healthQ1: {
        //   key: 'healthQ1',
        //   type: 'string',
        //   name: 'healthQ1',
        //   title: 'Health',
        //   visible: true,
        //   'x-component': 'Radio',
        //   'x-component-props': {
        //     marginBottom: '16px',
        //     fontSize: '18px',
        //   },
        //   'x-rules': [
        //     {
        //       required: true,
        //       message: 'This field is required',
        //     },
        //   ],
        //   enum: [
        //     { label: 'Yes', value: '1' },
        //     { label: 'No', value: '0' },
        //   ],
        // },
        BASE_INFO_MEGA_LAYOUT: {
          key: 'BASE_INFO_MEGA_LAYOUT',
          type: 'object',
          name: 'BASE_INFO_MEGA_LAYOUT',
          'x-component': 'mega-layout',
          'x-component-props': {
            grid: true,
            // full: true,
            autoRow: true,
            columns: 2,
          },
          properties: {
            name: {
              key: 'name',
              type: 'string',
              name: 'name',
              title: '姓名',
              visible: true,
              'x-component': 'input',
              'x-component-props': {},
              'x-rules': [
                {
                  required: true,
                  message: 'This field is required',
                },
                {
                  pattern: /^\d+$/,
                  message: '必须是数字',
                },
              ],
            },
            idType: {
              key: 'idType',
              type: 'string',
              name: 'idType',
              title: '证件类型',
              visible: true,
              'x-component': 'select',
              'x-component-props': {
                placeholder: '请选择',
                showSearch: true,
                filterOption: (input: string, option: any) => option.title.indexOf(input) >= 0,
              },
              'x-rules': [
                {
                  required: true,
                  message: 'This field is required',
                },
              ],
              enum: [
                { label: '身份证', value: '1' },
                { label: '台胞证', value: '2' },
                { label: '港澳同胞证', value: '0' },
              ],
            },
            idNo: {
              key: 'idNo',
              type: 'string',
              name: 'idNo',
              title: '证件号码',
              'x-component': 'input',
              'x-component-props': {},
              'x-rules': [
                {
                  required: true,
                  message: 'This field is required',
                },
              ],
            },
            gender: {
              key: 'gender',
              type: 'string',
              name: 'gender',
              title: '性别',
              visible: true,
              'x-component': 'RadioButton',
              'x-component-props': {},
              'x-rules': [
                {
                  required: true,
                  message: 'This field is required',
                },
              ],
              enum: [
                { label: '男', code: '1' },
                { label: '女', code: '2' },
              ],
            },
            birthday: {
              key: 'birthday',
              type: 'string',
              name: 'birthday',
              title: '生日',
              visible: true,
              'x-component': 'DatePicker',
              'x-component-props': {
                format: 'DD-MM-YYYY',
              },
              'x-rules': [
                {
                  required: true,
                  message: 'This field is required',
                },
              ],
            },
            occupation: {
              key: 'occupation',
              name: 'occupation',
              type: 'object',
              title: '对象字段',
              properties: {
                BLANK_LAYOUT: {
                  key: 'BLANK_LAYOUT',
                  type: 'object',
                  name: 'BLANK_LAYOUT',
                  'x-component': 'blank-wrapper',
                  'x-component-props': {
                    title: '对象字段',
                  },
                  properties: {
                    occupation1: {
                      key: 'occupation1',
                      type: 'string',
                      name: 'occupation1',
                      title: 'occupation1',
                      visible: true,
                      'x-component': 'select',
                      'x-component-props': {
                        placeholder: '请选择',
                        showSearch: true,
                        filterOption: (input: string, option: any) =>
                          option.title.indexOf(input) >= 0,
                      },
                      'x-rules': [
                        {
                          required: true,
                          message: 'This field is required',
                        },
                      ],
                      enum: [
                        { label: '司法治安', value: '1' },
                        { label: '台胞证', value: '2' },
                        { label: '港澳同胞证', value: '0' },
                      ],
                    },
                    occupation2: {
                      key: 'occupation2',
                      type: 'string',
                      name: 'occupation2',
                      title: 'occupation2',
                      visible: true,
                      'x-component': 'select',
                      'x-component-props': {
                        placeholder: '请选择',
                        showSearch: true,
                        filterOption: (input: string, option: any) =>
                          option.title.indexOf(input) >= 0,
                      },
                      'x-rules': [
                        {
                          required: true,
                          message: 'This field is required',
                        },
                      ],
                      enum: [
                        // { label: '司法人员', value: '1' },
                        // { label: '台胞证', value: '2' },
                        // { label: '港澳同胞证', value: '0' },
                      ],
                    },
                    occupation3: {
                      key: 'occupation3',
                      type: 'string',
                      name: 'occupation3',
                      title: 'occupation3',
                      visible: true,
                      'x-component': 'select',
                      'x-component-props': {
                        placeholder: '请选择',
                        showSearch: true,
                        filterOption: (input: string, option: any) =>
                          option.title.indexOf(input) >= 0,
                      },
                      'x-rules': [
                        {
                          required: true,
                          message: 'This field is required',
                        },
                      ],
                      enum: [],
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default schema;
