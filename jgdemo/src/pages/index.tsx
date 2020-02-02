import React from 'react';
import styles from './index.css';
import Link from 'umi/link';
import { Button,Input} from 'antd';
export const LOGIN = {
  login:function(){
    var userName = (document.getElementById('userName') as HTMLInputElement)?.value;
    var passWord = (document.getElementById('passWord') as HTMLInputElement)?.value;
    const postData ={
      userName:userName,
      passWord:passWord
    };
    fetch('http://127.0.0.1:8080/login',{
            // post提交
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(postData)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
        })
  }
};
export default function() {
  return (
    <div className={styles.normal}>
      <table style={{margin:"0 auto",width:300}}>
        <tbody>
        <tr>
        <td>用户名:</td>
        <td><Input placeholder="请输入用户名" id="userName" style={{width:200}}/></td>
        </tr>
        <tr>
        <td>密码:</td>
        <td><Input.Password placeholder="请输入密码" id="passWord" style={{width:200}}/></td>
        </tr>
        </tbody>
      </table>
      {/* <Button type="primary" style={{marginTop:10,width:300}} onClick={()=>(LOGIN.login())}>登录</Button> */}
      <Button type="link">
        <Link to="/mainfrm">直接进入</Link>
      </Button>
    </div>
  );
}

