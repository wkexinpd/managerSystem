## 1.git管理项目
    1). 创建远程仓库
    2). 创建本地仓库
        配置.gitignore
        git init
        git add .
        git commit -m "init"
    3). 将本地仓库推送到远程仓库
        git remote add origin url
        git push origin master
    4). 在本地创建自己的分支，并推送到远程
        git checkout -b wkx
        git push origin wkx
    5). 如果本地有修改
        git add .
        git commit -m "xxx"
        git push origin wkx
    6). 新的同事：克隆仓库
        git clone url
        git checkout -b wkx origin/wkx  //取远程分支并分化一个新分支
        git pull origin wkx
    7). 如果远程修改了
        git pull origin wkx
    8). 如何得到后面新增的远程分支
        git pull
        git checkout -b wkx origin/xxx
    9). 将自己的分支合并到master分支
        git merge wkx
        git push
## 2.使用antd
    下载antd的包
    按需打包：只打包import引入组件的js/css
        下载工具包(react-app-rewired、babel-plugin-import、customize-cra)
        config-overrides.js
        package.json
    自定义主题
        下载工具包(less less-loader)
        config-overrides.js
        const {override, fixBabelImports, addLessLoader} = require('customize-cra')
        module.exports = override(
          fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true
          }),
          addLessLoader({
            lessOptions: {
              javascriptEnabled: true,
              modifyVars: {'@primary-color': '#00acac'}
            }
          })
        )
## 3. 登录
1. 静态页面
2. 校验登录表单
   + 声明式验证
   + 自定义验证
3. 收集表单数据和表单的前台验证
    1). form对象
    如何让包含< Form >的组件得到form对象？WrapLoginForm = Form.create()(LoginForm)
    WrapLoginForm是LoginForm的父组件，它给LoginForm传入form属性
    用到了高阶函数和高阶组件的技术
    2). 操作表单数据
    form.getFieldDecorator('标识名称',{initialValue:初始值,rules:[]})(< Input />)包装表单项标签
    form.getFieldsValue(): 得到包含所有输入数据的对象
    form.getFieldValue(id): 根据标识得到对应字段输入的数据
    3). 前台表单验证
    a. 声明式表单验证：
        form.getFieldDecorator('标识名称',{rules:[{min:4,message:'错误提示信息'}]})(< Input />)
    b. 自定义表单验证
        validatePwd = (rule,value,callback) => {
            if(有问题) callback('错误提示信息') else callback()
        }
    c. 点击登录时统一验证
4. 高阶函数和高阶组件
    1). 高阶函数
        定义：接收的参数是函数或者返回值是函数
        常见的：数组遍历相关的方法 / 定时器 / Promise / 高阶组件 / fn.bind(obj)()
        作用：实现一个更加强大，动态的功能
    2). 高阶组件：
        本质是一个函数
        函数接收一个组件，返回一个新的组件
        Form.create()返回的就是一个高阶组件
    3). 高阶组件和高阶函数的关系
        高阶组件是特殊的高阶函数
        接收一个组件函数，返回是一个新的组件函数

## axios
1. 对代理的理解
+ 在package.json中配置proxy:''的代理
webpack-dev-server--->http请求代理的中间件http-proxy-middleware
具有特定功能的程序（工具包）
+ 运行在前台应用端，只能在开发时使用
+ 作用：解决开发时的ajax请求跨域问题
    + 监视并拦截请求（3000）
    + 转发请求（5000）
+ 配置代理
    + 告诉代理一些信息：转发的目标地址

## LeftNav
1. 默认选中对应的menuItem：向外暴露 使用高阶组件withRouter()来包装非路由组件，新组件想LeftNav传递3个特殊属性：history/location/match。可以使非路由组件可以操作路由相关语法了
2. 有可能需要默认打开某个submenu：访问的是某个二级菜单项对应的path
