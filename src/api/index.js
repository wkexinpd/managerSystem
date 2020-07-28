import ajax from './ajax'

let BASE = 'http://localhost:5000'
export function reqLogin(username,password){
  return ajax({
    method: 'post',
    url: BASE+'/login',
    data: {  //data是对象，默认使用json格式的请求体携带参数数据
      username,
      password
    }
  })
}