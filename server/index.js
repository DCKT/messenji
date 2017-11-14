const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 7878 })

wss.on('connection', function connection (ws) {
  console.log('conncted')

  ws.on('message', data => {
    console.log('Message !')
    console.log(data)
  })
})

module.exports = () => 'hello'
