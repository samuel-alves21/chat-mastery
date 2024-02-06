const http = require('http')

const { app } = require('./app') 

const server = http.createServer(app)

const PORT = 8000

server.listen(8000, () => {
  console.log(`Server running on port ${PORT}`)
})  