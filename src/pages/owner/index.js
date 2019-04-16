import { Table, Divider, Tag,Button,Popconfirm, message } from 'antd';
import router from 'umi/router';

const { Column, ColumnGroup } = Table;

const data = [{
  key: '1',
  Id: '1',
  Name: 'John',
  Address: 'New York No. 1 Lake Park',
  City: 'Nanjing',
  Telephone: '123456',
  Pets: ['dog', 'cat'],
}, {
  key: '2',
  Id: '2',
  Name: 'Jim',
  Address: 'London No. 1 Lake Park ',
  City: 'Nanjing',
  Telephone: '123456',
  Pets: ['dog'],
}, {
  key: '3',
  Id: '3',
  Name: 'Joe',
  Address: 'Sidney No. 1 Lake Park',
  City: 'Nanjing',
  Telephone: '123456',
  Pets: ['dog', 'bird'],
}];

export default function() {
  return(
    <div>
    <Table dataSource={data}>
      <Column
          title="Name"
          dataIndex="Name"
          key="Name"
      />//name
      <Column
        title="Address"
        dataIndex="Address"
        key="Address"
      />//address
      <Column
        title="City"
        dataIndex="City"
        key="City"
      />//city
      <Column
        title="Telephone"
        dataIndex="Telephone"
        key="Telephone"
      />//telephone
      <Column
        title="Pets"
        dataIndex="Pets"
        key="Pets"
        render={(pets,record) => (
          <span>
          {pets.map(pets => <Tag onClick={() =>{gotoPet(record.Id, 2)}} color="blue" key={pets}>{pets}</Tag>)}
          </span>
        )}
      />//pets
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <span>
          <a href="javascript:" onClick={()=>{router.push("/pet/ownerid/add")}}>Add Pet for {record.Name}</a>
          <Divider type="vertical"/>
          <a href="javascript:" onClick={()=>{router.push("/pet/ownerid/showpets")}}>Show pets</a>
          <Divider type="vertical"/>
          <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
             <a href="javascript:">Delete</a>
          </Popconfirm>
          <Divider type="vertical"/>
          <a href="javascript:">Modify</a>
        </span>
        )}
      />//actions
    </Table>
        <Button type="primary" onClick={goToAddOwner}>Add New Owner</Button>
    </div>
  );
}

function goToAddOwner() {
  console.log("add owner") /*TODO*/
  router.push('/owner/add');
}

function gotoPet({ownerId},{petId}) {
  router.push('/pet/${ownerId}/${petId}/showpet');
}

function confirm(e) {
  console.log(e);
  message.success('Delete Owner');
  console.log("delete owner") /*TODO*/
}

function cancel(e) {
  console.log(e);
  message.error('Cancel');
}
