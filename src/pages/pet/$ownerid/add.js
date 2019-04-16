import { Cascader } from 'antd';

const options = [{
  value: 'dog',
  label: 'dog',
}, {
  value: 'cat',
  label: 'cat',
}, {
  value: 'bird',
  label: 'bird',
}
];

function onChange(value) {
  console.log(value);
}

export default function(){
  return(
    <Cascader style={{ width: 150 }} options={options} onChange={onChange} placeholder="pet type" />
  );
}
