import {Card, Icon, Avatar, List, Button} from 'antd';
import router from "umi/router";
import {connect} from "dva";
import {Component} from "react";
import PetList from "@/pages/pet/$ownerid/showpets";

const mapStateToProps = (state) =>{
  return{
    service: state.service
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchData: ()=>dispatch({type:"service/fetchData"})
  }
}

const { Meta } = Card;

@connect(mapStateToProps,mapDispatchToProps)
class ServiceList extends Component{
  componentDidMount(){
    this.props.fetchData();
  }
  render(){
    const data = this.props.service.data;
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
}

export default ServiceList;
