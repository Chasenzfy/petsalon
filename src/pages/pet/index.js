import { Button, Tag} from 'antd';
import React,{Component} from 'react';
import {connect} from "dva";

const typeMap =["dashed","normal","danger","primary"];

class MyPage extends Component{
  state = {
    type:"dashed",
    count:0,
  };

  render(){
    return(
      <div>
        <ul>
          <h1 style={{color:"blue"}}>My Second Page</h1>
          <Button type={this.state.type} onClick={()=>{
            let count = this.state.count;
            this.setState({type:typeMap[count%4],count:count+1})
          }}>
            click
          </Button>
          <Tag color="orange">{this.state.count}</Tag>
        </ul>
      </div>
    );
  }
}

export default MyPage;
