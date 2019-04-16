import {Cascader, Input, List,InputNumber} from 'antd';

const cityOptions = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

export default function(){
  return(
    <List itemLayout="vertical">
      <Input style={{ width: 150 }} placeholder="Name" />
      <Cascader style={{ width: 150 }} options={cityOptions} onChange={onChange} placeholder="City" />
      <Input style={{ width: 250 }} placeholder="Address" />
      <InputNumber
        defaultValue={1000}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={onChange}
      />
    </List>
  );
}
