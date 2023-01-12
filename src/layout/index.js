import React from 'react';
import { Layout } from 'antd';
import Navbar from './navbar';
import FooterPage from './footer';
const {   Content } = Layout;

export default function LayoutPage({children}) {
    return (
        <Layout>
      <Navbar/>
      <Content>{children}</Content>
      <FooterPage/>
    </Layout>
    )
}

