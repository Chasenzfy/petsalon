import {Card, Icon, Avatar, List, Button} from 'antd';
import router from "umi/router";

const { Meta } = Card;

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
      dataSource={data}
      grid={{
        gutter: 16, column: 3,
      }}
      renderItem={item => (
      <List.Item >
        <Card style={{ width: 300 }} actions={[<a>edit</a>, <a>more</a>]}>
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={item.title}
            description="This is the description"
          />
        </Card>
      </List.Item>
)}
  />
      <Button style={{ marginBottom: 16,marginLeft: 900}} type="primary" icon="user-add" onClick={()=>{router.push("./add")}}>Add New Service</Button>
    </div>
  );
}

