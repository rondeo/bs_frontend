import React, { Component } from 'react';
import HeaderBar from './common/HeaderBar'
import { Layout, Breadcrumb,message } from 'antd';
import history from '../src/common/history'
import 'antd/dist/antd.css';

const { Content, Footer } = Layout;

class User extends Component {
    logout = () => {
        localStorage.removeItem("userinfo");
        history.push('/home');
        message.error("请先登录")
    }
    render() {
        let name;
        if (localStorage.getItem('userinfo') == null) {
            history.push('/home')
        }
        else {
            name = JSON.parse(localStorage.getItem('userinfo')).user_id;
        }
        return (
            <div className="Home">
                <Layout style={{ minHeight: '100vh' }}>
                    <HeaderBar username={name} logout={this.logout} />

                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            
                        </div>
                    </Content>

                    <Footer style={{ textAlign: 'center' }}>BS©2019 Created by jzy</Footer>

                </Layout>
            </div>
        );
    }
}

export default User;