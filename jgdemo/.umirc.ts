import { IConfig } from 'umi-types'; // ref: https://umijs.org/config/

const config: IConfig = {
  treeShaking: true,
  routes: [
    {
      path: '/',
      exact: true,
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
    {
      path: '/mainfrm',
      component: '../layouts/BasicLayout',
      routes: [
        {
          name: '监控页',
          path: '/mainfrm/dashboardmonitor',
          component: './DashboardMonitor',
        },
        {
          path: '/mainfrm',
          component: '../pages/user/User',
        },
        {
          path: '/mainfrm/user',
          component: '../pages/user/User',
        },
        {
          path: '/mainfrm/userrole',
          component: '../pages/userrole/UserRole',
        },
        {
          name: '工作台',
          path: '/mainfrm/dashboardworkplace',
          component: './DashboardWorkplace',
        },
        {
          name: '空白页面',
          path: '/mainfrm/emptypage',
          component: './EmptyPage',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'jgdemo',
        dll: true,
        locale: {
          enable: true,
          // default false
          default: 'zh-CN',
          // default zh-CN
          baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
        },
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
export default config;
