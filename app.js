import express from 'express'
import http from 'http'
import {Server} from 'socket.io'

const PORT = 5000

let app = express()
let server = http.createServer(app)
let io = new Server(server)

app.use(express.static('public'))

io.on('connection', (socket) => {
  console.log(`Connection made with ${socket.id}`)
  socket.on('msg', (message) => {
    io.emit('output', message)
  })
})

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})