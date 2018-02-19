/**
 * Created by heyang on 2018/2/19.
 */
import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link} from 'react-router';
import 'antd/dist/antd.css';
import './app.css'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {

    constructor() {
        super()
        this.state = {
            collapsed : false
        }
    }

    toggleSider = () => {
        console.log("ddd");
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Header className="header">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">
                            导航一
                        </Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider
                        width={200}
                        style={{ background: '#fff' }}
                        collapsed={this.state.collapsed}
                        >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            inlineIndent={16}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1">
                                <Link to="/introduce">
                                    <Icon type="inbox" />
                                    <span>
                                        介绍
                                    </span>
                                </Link>
                            </Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="user" /><span>Ant Des</span></span>}>
                                <Menu.Item key="2">
                                    <Link to="/form">表单</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/table">表格</Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to="/progress">进度条</Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Link to="/carousel">轮播图</Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggleSider}
                            />
                        </Header>
                        <Content style={{  margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default App