import {List, Avatar, Skeleton, Button} from 'antd';
import router from "umi/router";

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 5',
  },
];

export default function() {
  return (
    <div>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item actions={[
          <a>edit</a>,
          <a onClick={()=>{router.push("/service/ownerid/petid/show")}}>show service</a>,
          <a onClick={()=>{router.push("/service/ownerid/petid/add")}}>add service</a>
        ]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
          </Skeleton>
        </List.Item>
      )}
    />
      <Button style={{ marginBottom: 16,marginLeft: 680}} type="primary" icon="user-add" onClick={()=>{router.push("./add")}}>Add New Pet</Button>
    </div>
  );
}

