import {Button, Cascader, Input, List,InputNumber,DatePicker} from 'antd';
import router from 'umi/router';

const options = [{
  value: 'haircut',
  label: 'haircut',
}, {
  value: 'bathe',
  label: 'bathe',
}, {
  value: 'message',
  label: 'message',
}
];

export default function(){
  return(
    <div>
      <List itemLayout="vertical">
        <div style={{ marginBottom: 16 }} align={'left'}>

          <li  style={{fontSize:30}} align={'center'}>input service's message</li>
        </div>
        <div style={{ marginBottom: 16 }} align={'center'}>
          <Cascader style={{ width: 150 }} options={options} onChange={onChange} placeholder="Service category" />
        </div>
        <div style={{ marginBottom: 16 }} align={'center'}>
          <DatePicker onChange={onChangeDate} />
        </div>
        <div style={{ marginBottom: 16 }} align={'center'}>
          <InputNumber
            defaultValue={1000}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={onChange}
          />
        </div>
      </List>
      <Button style={{ marginBottom: 16,marginLeft: 680}} type="primary" icon="check" onClick={saveMesService}>OK</Button>
    </div>
  );
}

function saveMesService() {
  console.log("savemespet");
  router.push("./show")
}

function onChangeDate(date, dateString) {
  console.log(date, dateString);
}

function onChange(value) {
  console.log(value);
}
