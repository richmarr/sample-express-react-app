const express = require('express')
const app = express()
const port = 3000
const myRoutespackage = require('./routes')


app.use((req, res, next) => {
  req.foo = 'bar'
  req.user = { name:'Steve', email:'steve@stevo.com'}
  next()
})
// headers
// auth
// sessions 




app.get('/test', myRoutespackage.home.get)

app.get('/test/:id(\\d+)', (req, res, next) => {
  // throw new Error("foo")
  res.send(`Hello World ${id}!`)
})

app.all('*',(req, res, next) => {
  res.status(404).send('Not found at all')
})

app.use((err, req, res, next) => {
  res.status(500).send(`Error ${err.message}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})