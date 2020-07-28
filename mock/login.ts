import { Request, Response } from 'express'

export default {
  'POST /login': (req: Request, res: Response) => {
    const { password, username } = req.body
    if(password === 'admin' && username === 'admin'){
      res.send({
        status: 0,
        data: {
          _id: "5c3b297dea95883f340178b0",
          username: "admin",
          create_time: 1547381117891,
          __v: 0,
          role: {
            menus: []
          }
        }
      })
      return
    }
    res.send({
      status: 1,
      msg: "用户名或密码不正确!"
    })
  }
}