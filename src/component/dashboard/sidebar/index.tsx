
  import { Layout,Button } from 'antd';

  import SiderData from './sidebardata'

const Index = ()=>{

    // const items: MenuProps['items'] = [
    //     UserOutlined,
    //     VideoCameraOutlined,
    //     UploadOutlined,
    //     BarChartOutlined,
    //     CloudOutlined,
    //     AppstoreOutlined,
    //     TeamOutlined,
    //     ShopOutlined,
    //   ].map((icon, index) => ({
    //     key: String(index + 1),
    //     icon: React.createElement(icon),
    //     label: `nav ${index + 1}`,
    //   }));
const { Sider } = Layout;

    return (
        <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor:'#fff'
        }}
      >
        <div className="demo-logo-vertical" style={{backgroundColor:'#fff'}} />
        
        <div style={{fontFamily:'Poppins',padding:10,backgroundColor:'#fff'}}>
            <Button type='primary'>FAST-NG INVENTORY</Button>
        </div>
        <SiderData/>
         {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} /> */}

      </Sider>
    )
}

export default Index