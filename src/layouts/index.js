import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import React,{Component} from 'react';
import router from "umi/router";
const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

function goToMainMenu() {
  router.push('/');
}

function goToOwner() {
  router.push('/owner');
}

function goToOurMes() {
  router.push('/others/ourmes');
}

class SiderDemo extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item onClick={goToMainMenu} key="1">Main Menu</Menu.Item>
            <Menu.Item onClick={goToOwner} key="2">Owner</Menu.Item>
            <Menu.Item onClick={goToOurMes} key="3">Our Message</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div>{this.props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default SiderDemo;


/*
import styles from './index.css';


function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>here is a menu</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
*/
