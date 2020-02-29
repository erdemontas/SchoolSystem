import React from 'react'

import { Form, Input, Button, Spin } from 'antd';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const NormalLoginForm = () => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            {errorMessage}
            {

                this.props.loading ?
                    <Spin indicator={antIcon} />
                    :
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ marginRhight: '10px' }}>
                                Login
                </Button>
                            Or
                <NavLink style={{ marginRight: '10px' }} to='/signup/'>
                                signup
                </NavLink>
                        </Form.Item>
                    </Form>
            }
        </div>

    );
};


export default Login