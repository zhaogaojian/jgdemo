import { Menu, Icon } from 'antd';
import React from 'react';
import router from 'umi/router';
import Item from 'antd/lib/list/Item';
const { SubMenu } = Menu;
class LeftMenuTree extends React.Component {
  state={list:[{"id":0,"title":"首页","url":"/","children":[]},{"id":1,"title":"权限配置","parentid":0,"children":[{"id":2,"title":"用户管理","url":"/mainfrm/user","parentid":1,"children":[]},{"id":3,"title":"角色管理","url":"/mainfrm/userrole","parentid":1,"children":[]}]}]};
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.state.list)
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      {
        this.showMenus(this.state.list)
      }
      </Menu>
    );
  }
  handleClick = e => {
    console.log('click: ', e);
    console.log('url:'+e.item.props["data-url"]);
    //console.log('history:'+this.props.history);
    //this.props.history.push(e.item.props["data-url"]);
    router.push(e.item.props["data-url"]);
  };
  //显示菜单列表
  private showMenus(list): React.ReactNode {
    return list.map((item, index) => (
    this.showMenu(item)
    ));
  }
  //显示菜单项
  private showMenu(item: any) {
    if(item.children.length==0)
    return <Menu.Item key={item.id} onClick={this.handleClick} data-url={item.url}>
      <Icon type="file" />
      <span>{item.title}{item.id}</span>
    </Menu.Item>
    else
    return <SubMenu key={item.id} title={
      <span>
        <Icon type="folder" />
        <span>{item.title}</span>
      </span>
    }>
    {this.showMenus(item.children)}
    </SubMenu>
    
  }
}
export default LeftMenuTree;
