import { IConfig } from 'umi-types';
// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      exact:true,
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    },
    {
       path: '/mainfrm',
       component: '../layouts/BasicLayout',
       routes: [
        { path: '/mainfrm', component: '../pages/User' },
        { path: '/mainfrm/user', component: '../pages/User' },
        { path: '/mainfrm/userrole', component: '../pages/UserRole' },
      ]
    }
    
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'jgdemo',
      dll: true,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
