const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 7878 })

const send = ws => options => {
  wss.clients.forEach(function each (client) {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(options))
    }
  })
}

wss.broadcast = function broadcast (data) {
  wss.clients.forEach(function each (client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data)
    }
  })
}

wss.on('connection', function connection (ws) {
  console.log('connected')

  ws.on('message', event => {
    const data = JSON.parse(event)

    switch (data.event) {
      case 'sms:received':
        send(ws)({
          event: 'sms:new',
          payload: data.payload
        })
        break
      case 'web:send-sms':
        send(ws)({
          event: 'sms:send',
          payload: data.payload
        })
        break
      default:
        break
    }
  })
})

module.exports = () => 'hello'
