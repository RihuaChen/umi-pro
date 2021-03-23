import React from 'react';
import { Radio } from 'antd';

const FormilyRadioBtn = (props: {
  dataSource: [{ code: string; label: string }];
  value: any;
  disabled: boolean;
  onChange: (arg0: string) => void;
}) => {
  return (
    <Radio.Group
      buttonStyle="outline"
      onChange={(e) => props.onChange(e.target.value)}
      defaultValue={props.value}
      value={props.value}
      disabled={props.disabled}
    >
      {props.dataSource?.map((ele, index) => {
        return (
          <Radio.Button key={`a${index}`} value={ele.code}>
            {ele.label}
          </Radio.Button>
        );
      })}
    </Radio.Group>
  );
};

export { FormilyRadioBtn as RadioButton };
