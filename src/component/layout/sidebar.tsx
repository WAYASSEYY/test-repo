import React, { useState } from 'react'
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<NavLink to="/overview">Overview</NavLink>, '1', <PieChartOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  // getItem('Option 3', '3', <ContainerOutlined />),

  getItem('Prescription', 'sub1', <MailOutlined />, [
    getItem('Oders', '5'),
    getItem('Create Prescription', '6'),
    // getItem('Option 7', '7'),
    // getItem('Option 8', '8'),
  ]),

  getItem('Appointments', 'sub2', <AppstoreOutlined />, [
    getItem('Orders', '9'),
    getItem('Create appointment', '10'),

    // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
  getItem('Diagnosis','13', <MailOutlined />, [
    getItem('Oders', '14'),
    getItem('Create Diagnosis', '15'),
  ]),
  getItem('Users', '1', <PieChartOutlined />),
];




export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };




  return (
    // <div style={{ width: 200}}>
    <div className='w-full'>
      <div className='h-16'></div>
    {/* <Button type="primary" onClick={toggleCollapsed}>
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Button> */}
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="light"
      inlineCollapsed={collapsed}
      items={items}
    />
  </div>
  )
}







