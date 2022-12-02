const users = []
const bcrypt = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username)
        {
        let passmatch = bcrypt.compareSync(password, users[i].password)
        if (passmatch) {
          let userObj = {...users[i]}
          console.log(userObj)
          delete userObj.password
          console.log(userObj)
          res.status(200).send(userObj)
          return
        }
        }
      }
      res.status(400).send("User not found.")
      },
    register: (req, res) => {
        console.log('Registering User')
        // console.log(req.body.password)
        let pass = req.body.password
        const salt = bcrypt.genSaltSync(5)
        const hashedPass = bcrypt.hashSync(pass, salt)
        // console.log(hashedPass)
        let NewUser = {...req.body }
        NewUser.password = hashedPass
        users.push(NewUser)
        console.log(req.body)
        console.log(NewUser)
        res.status(200).send(req.body)
    }
  }
    

