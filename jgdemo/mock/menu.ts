export default {
  '/api/getmenu': [
    {
      id: 0,
      title: '首页',
      url:'home',
      children: [],
    },
    {
      id: 1,
      title: '权限配置',
      parentid: 0,
      children: [
        {
          id: 2,
          title: '用户管理',
          parentid: 1,
          children: [],
        },
        {
          id: 3,
          title: '角色管理',
          parentid: 1,
          children: [],
        },
      ],
    }
  ]
};
