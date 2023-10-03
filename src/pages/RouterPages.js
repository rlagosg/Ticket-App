import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import { UiContext } from '../context/UiContext';

const { Sider, Content } = Layout;

export const RouterPages = () => {
  
  const { ocultarMenu } = useContext(UiContext);

  return (
    <Layout style={{ height: '100vh', width: '100vw' }}>
      <Sider hidden={ocultarMenu} collapsedWidth={'0'} breakpoint='md'>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/ingresar">Ingresar</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/cola">Cola</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/crear">Crear Ticket</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: 'white',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
