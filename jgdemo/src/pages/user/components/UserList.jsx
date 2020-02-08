import { Menu, Icon } from 'antd';
import React from 'react';
import router from 'umi/router';
import { Table, Divider, Tag } from 'antd';
const { Column, ColumnGroup } = Table;
class UserList extends React.Component { 
    constructor(props) {
        super(props);
      };
    data = [
        {
          key: '1',
          userName: 'John',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
          avatar:'http://localhost:8000/images/1.jpg'
        },
        {
          key: '2',
          userName: 'Jim',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
          avatar:'http://localhost:8000/images/2.jpg'
        }
      ];
render(){
    return (
    <Table dataSource={this.data} scroll={{ x: 1500, y: 300 }}>
        <Column title="姓名" dataIndex="userName" key="firstName" fixed="left"/>
        <Column title="年龄" dataIndex="age" key="age" width="200px" />
        <Column title="地址" dataIndex="address" key="address" width="300px" />
        <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        width="300px"
        render={tags => (
            <span>
            {tags.map(tag => (
                <Tag color="blue" key={tag}>
                {tag}
                </Tag>
            ))}
            </span>
        )}
        />
        
        <Column
        title="Action"
        key="action"
        width="300px"
        render={(text, record) => (
            <span>
            <a>Invite {record.lastName}</a>
            <Divider type="vertical" />
            <a>Delete</a>
            </span>
        )}
        />
        <Column 
        title="头像" 
        dataIndex="avatar" 
        key="avatar" 
        width="200px"
        fixed="right"
        render={t => (
          <span>
          {<img src={t} style={{wdith:"100px",height:"100px"}}></img>}
          </span>
      )}
        />
    </Table> 
    );
        }
}
export default UserList;