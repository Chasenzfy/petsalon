import {Cascader, Input, List, InputNumber, Table, Button,Icon} from 'antd';
import router from "umi/router";

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
    <div>
    <List itemLayout="vertical">
      <div style={{ marginBottom: 16 }} align={'left'}>
        <li  style={{fontSize:30}} align={'center'}>input owner's message</li>
      </div>
      <div style={{ marginBottom: 16 }} align={'center'}>
          <Input style={{ width: 150 }} placeholder="Name" />
      </div>
      <div style={{ marginBottom: 16 }} align={'center'}>
          <Cascader style={{ width: 150 }} options={cityOptions} onChange={onChange} placeholder="City" />
      </div>
      <div style={{ marginBottom: 16 }} align={'center'}>
          <Input style={{ width: 250 }} placeholder="Address" />
      </div>
      <div style={{ marginBottom: 16 }} align={'center'}>
          <Input style={{ width: 150 }} placeholder="Telephone" />
      </div>
    </List>
      <Button style={{ marginBottom: 16,marginLeft: 680}} type="primary" icon="check" onClick={saveMesOwner}>OK</Button>
    </div>
  );
}

function saveMesOwner() {
  /*TODO*/
  console.log("mes saved");
  router.push('/owner');
}
