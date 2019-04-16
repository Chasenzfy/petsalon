import {Button, Cascader, Input, List} from 'antd';
import router from 'umi/router';

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
    <div>
      <List itemLayout="vertical">
        <div style={{ marginBottom: 16 }} align={'left'}>
          <li  style={{fontSize:30}} align={'center'}>input pet's message</li>
        </div>
        <div style={{ marginBottom: 16 }} align={'center'}>
          <Input style={{ width: 150 }} placeholder="Name" />
        </div>
        <div style={{ marginBottom: 16 }} align={'center'}>
          <Cascader style={{ width: 150 }} options={options} onChange={onChange} placeholder="pet type" />
        </div>
      </List>
      <Button style={{ marginBottom: 16,marginLeft: 680}} type="primary" icon="check" onClick={saveMesPet}>OK</Button>
    </div>
  );
}

function saveMesPet() {
  console.log("savemespet");
  router.push("./showpets")
}
