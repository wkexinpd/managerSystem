import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import './login.less'

export default class Login extends Component {
  handleSubmit = ({username,password}) => {
      if(username==='admin'&&password==='admin'){
        message.success('登陆成功')
        const user= { username, password }
        memoryUtils.user = user
        storageUtils.saveUser('admin_token')
        this.props.history.replace('/')
      }else{
        message.error('用户名或密码错误')
      }
  }
  validatePwd = (rule, value, callback) => {
    value = value.trim()
    if(!value){
      callback('密码必须输入')
    } else if (value.length<4) {
      callback('密码不能小于4位')
    } else if (value.length>12) {
      callback('密码不能大于12位')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)){
      callback('密码必须为英文、数字或下划线组成')
    } else {
      callback()
    }
  }
  render() {
    const user = memoryUtils.user
    // 如果内存没有存储user ==> 当前没有登陆
    console.log(user);
    if(user&&user.username) {
      // 自动跳转到登陆(在render()中)
      return <Redirect to='/'/>
    }
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
            <Form onFinish={this.handleSubmit}>
              <Form.Item
                name="username"
                initialValue=''
                rules={[
                  {required:true,message:'用户名不能为空'},
                  {min:4,whitespace:true,message:'用户名最小长度为4'},
                  {max:12,message:'用户名最大长度为12'},
                  {pattern:/^[0-9a-zA-Z_]+$/,message:'用户名必须为英文、数字或下划线组成'}
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                initialValue=''
                rules={[
                  {
                   validator: this.validatePwd
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
                <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * 理解Form组件：包含<Form></Form>的组件
 * 利用Form.create() 包装Form组件生成一个新的组件
 * 新组件会向form组件传递一个强大的属性：属性名：form，属性值对象
 *
 * 高阶函数
 *    定义：接受的参数是函数或者返回值是函数
 *    常见的：数组遍历相关的方法 / 定时器 / Promise / 高阶组件
 *    作用：实现一个更加强大，动态的功能
 *
 * 高阶组件：
 *    本质是一个函数
 *    函数接受一个组件，返回一个新的组件
 *    Form.create()返回的就是一个高阶组件
 */
