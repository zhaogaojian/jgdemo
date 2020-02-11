import React, { Props } from 'react';
import { Button, Input } from 'antd';
import { connect } from 'dva';
import UserList from './components/UserList';
import userRoleState from '../userrole/stores/UserRoleState';
class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('render:');
    console.log(this.props);
	const userName=(this.props as any).UserInfo.username;
    return (
      <div>
        用户管理
        <div>姓名:{userName}</div>
        <div>{userRoleState.secend}</div>
        <Button
          type="primary"
          style={{ marginTop: 10, width: 300 }}
          onClick={this.handleReadFromSrvClick.bind(this)}
        >
          从服务端读取
        </Button>
        <Button style={{ marginTop: 10, width: 300 }} onClick={this.handleModifyClick}>
          修改
        </Button>
        <UserList />
      </div>
    );
  }
  handleReadFromSrvClick(e) {
    userRoleState.add();

    (this.props as any).dispatch({
      type: 'User/getUserInfo',
      payload: { id: 1 },
    });
    console.log('click: ', e);
  }
  handleModifyClick = e => {
    const userInfo = {
      UserInfo: {
        username: '张三2',
      },
    };
    (this.props as any).dispatch({
      
      type: 'User/updateUserState',
      payload: userInfo,
    });
    console.log('click: ', e);
  };
}
const getUserInfoFromState = state => {
  console.log(state);
  return { UserInfo: state.User.UserInfo };
};
//connect后会把dispatch传入User组件
export default connect(getUserInfoFromState)(User);
