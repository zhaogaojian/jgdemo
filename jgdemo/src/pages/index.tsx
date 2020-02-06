import React from 'react';
import styles from './index.css';
import Link from 'umi/link';
import { Button,Input} from 'antd';
import Password from 'antd/lib/input/Password';
class index extends React.Component{ 
  constructor(props) {
    super(props);
    this.state={
      userName:'test',
      passWord:'123456'
    }
  }
  state:{
    userName,
    passWord
  }
  login(){
    var userName = this.state.userName;
    var passWord = this.state.passWord;
    const postData ={
      userName:userName,
      passWord:passWord
    };
    console.log(postData);
    fetch('http://localhost:8000/api/login',{
            // post提交
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "type":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
            },
            body:JSON.stringify(postData)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
        })
  };
  handleUserNameChange=(event)=>{
    this.setState({userName: event.target.value});
    console.log(this.state.userName);
  }
  handlePassWordChange(event){
    //this.state.passWord=event.target.value;//错误用法，这样passWord value不会更新
    this.setState({passWord: event.target.value});
  }
  render() {
    return (
      <div className={styles.normal}>
        <table style={{margin:"0 auto",width:300}}>
          <tbody>
          <tr>
          <td>用户名:</td>
          <td><Input placeholder="请输入用户名" id="userName" value={this.state.userName} style={{width:200}} onChange={this.handleUserNameChange}/></td>
          </tr>
          <tr>
          <td>密码:</td>
          <td><Input.Password placeholder="请输入密码" id="passWord"  value={this.state.passWord} style={{width:200}} onChange={this.handlePassWordChange.bind(this)}/></td>
          </tr>
          </tbody>
        </table>
        <Button type="primary" style={{marginTop:10,width:300}} onClick={()=>(this.login())}>登录</Button>
        <Button type="link">
        <Link to="/mainfrm">直接进入</Link>
      </Button>
      </div>
    );
  }
}
export default index;


