import React from 'react';
import { observer} from 'mobx-react';
import { decorate,observable, computed, action} from 'mobx';
import { Button,Input} from 'antd';
@observer
class UserRole extends React.Component { 
  
  constructor(props) {
    super(props);
  };
  @observable 
  roleName = "123";
  roleFunction="add,update";
  handleTestClick = e => {
    this.roleName="234";
    console.log(this.roleName);
  };
  render() {
    return (
      <div>角色管理
       <div>{this.roleName}</div>
      <Button type="primary" style={{marginTop:10,width:300}}  onClick={this.handleTestClick}>测试</Button>
      </div>
    );
  }
}

export default UserRole;