import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './login.less'

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="news-feed">
          <div className="img">

          </div>
          <div className="news-caption">
            <h4>后台管理系统</h4>
            <p>基于react、antD实现的后台管理系统</p>
          </div>
        </div>
        <div className="rigth-content">
          <div className="login-header">
            用户登录
          </div>
          <div className="login-content">
            <Form>
              <Form.Item
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
