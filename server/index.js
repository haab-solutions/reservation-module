const express = require ('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("tesing is working")
})

app.listen(port, ()=> console.log(`Reservations module listening on port ${port}`))