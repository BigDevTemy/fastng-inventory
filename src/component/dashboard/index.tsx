import React from 'react';
import { Layout, theme } from 'antd';
import Sider from './sidebar'
import {
    Outlet,
        RouterProvider,createBrowserRouter
    } from "react-router-dom";
import { useLocation, useResolvedPath } from 'react-router-dom';

const { Header, Content, Footer, } = Layout;

const Index: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  let resolvePath = useResolvedPath('/dashboard/test')
  let match = useLocation()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello Vincent!</div>,
     
    },
    {
        path: "machine",
        element: <div>Hello Goshen</div>,
        
      },
      
  ]);
  return (
    <Layout hasSider>
      <Sider/>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, backgroundColor:'#4796BD'}} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Outlet/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Fastng-Inventory System</Footer>
      </Layout>
    </Layout>
  );
};

export default Index;

// import React from 'react';
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';

// const { Header, Content, Sider } = Layout;

// const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

// const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);

//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,

//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   },
// );

// const Index: React.FC = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   return (
//     <Layout>
//       <Header style={{ display: 'flex', alignItems: 'center' }}>
//         <div className="demo-logo" />
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
//       </Header>
//       <Layout>
//         <Sider width={200} style={{ background: colorBgContainer }}>
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['sub1']}
//             style={{ height: '100%', borderRight: 0 }}
//             items={items2}
//           />
//         </Sider>
//         <Layout style={{ padding: '0 24px 24px' }}>
//           <Breadcrumb style={{ margin: '16px 0' }}>
//             <Breadcrumb.Item>Home</Breadcrumb.Item>
//             <Breadcrumb.Item>List</Breadcrumb.Item>
//             <Breadcrumb.Item>App</Breadcrumb.Item>
//           </Breadcrumb>
//           <Content
//             style={{
//               padding: 24,
//               margin: 0,
//               minHeight: 280,
//               background: colorBgContainer,
//             }}
//           >
//             Content
//           </Content>
//         </Layout>
//       </Layout>
//     </Layout>
//   );
// };

// export default Index;