import React from 'react';
import { observer} from 'mobx-react';
import { decorate,observable, computed, action} from 'mobx';
import { Button,Input} from 'antd';
import userRoleState from './stores/UserRoleState';
@observer
class UserRole extends React.Component { 
  
  constructor(props) {
    super(props);
  };
  @observable  
  roleName = "123";
  @computed get roleNameInfo()
  {
    return "roleName"+this.roleName;
  }
  handleTestClick = e => {
    //this.roleName="234";
    console.log(this.roleName);
    userRoleState.add();
  };
  render() {
    return (
      <div>角色管理
      <div>{this.roleNameInfo}</div>
      <div>{this.roleName}</div>
      <div>{userRoleState.secend}</div>
      <Button type="primary" style={{marginTop:10,width:300}}  onClick={this.handleTestClick}>测试</Button>
      </div>
    );
  }
}

export default UserRole;