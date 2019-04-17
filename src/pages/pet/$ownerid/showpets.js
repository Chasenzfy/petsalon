import {List, Avatar, Skeleton, Button} from 'antd';
import router from "umi/router";
import {connect} from "dva";
import {Component} from "react";

const mapStateToProps = (state) =>{
  return{
    pets: state.pet
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchData: ()=>dispatch({type:"pet/fetchData"})
  }
}

@connect(mapStateToProps,mapDispatchToProps)
class PetList extends Component{
  componentDidMount(){
    this.props.fetchData();
  }
  render(){
    const data = this.props.pets.data;
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
}

export default PetList;
