import { Table, Divider, Tag,Button,Popconfirm, message } from 'antd';
import router from 'umi/router';
import {connect} from "dva";
import {Component} from "react";
import request from '../../util/request';

const { Column, ColumnGroup } = Table;

const mapStateToProps = (state) =>{
  return{
    owner: state.owner
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchData: ()=>dispatch({type:"owner/fetchData"}),
    deleteHandler:(id)=>dispatch({ type: 'owner/remove', payload: id,}),
  }

}

@connect(mapStateToProps,mapDispatchToProps)
class OwnerList extends Component{
  componentDidMount(){
    this.props.fetchData();
  }
  render(){
    const data = this.props.owner.data;
    return(
      <div>
        <Table dataSource={data}>
          <Column
            title="Name"
            dataIndex="name"
            key="name"
          />//name
          <Column
            title="Address"
            dataIndex="address"
            key="Address"
          />//address
          <Column
            title="City"
            dataIndex="city"
            key="City"
          />//city
          <Column
            title="Telephone"
            dataIndex="telephone"
            key="Telephone"
          />//telephone
          <Column
            title="Pets"
            dataIndex="pets"
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
          <Popconfirm title="Are you sure delete this task?" onConfirm={this.props.deleteHandler.bind(null,record.id)} onCancel={cancel} okText="Yes" cancelText="No">
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
}

function goToAddOwner() {
  console.log("add owner") ;/*TODO*/
  router.push('/owner/add');
}

function gotoPet({ownerId},{petId}) {
  console.log(ownerId,petId);
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

export function remove(id) {
  return request(`/api/owner/${id}`,{method: 'DELETE',});
}

export function create(values) {
  return request(`/api/owner`,{
    method: 'POST',
    body:JSON.stringify(values),});
}

export function fetch({ page }) {
  return request(`/api/owner?_page=${page}`);
}

export default OwnerList;


