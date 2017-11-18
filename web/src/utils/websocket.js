// @flow
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import { addMessage } from '../actions/messages'

export const initWebsocket = store => {
  const client = new W3CWebSocket('ws://192.168.1.82:7878', 'echo-protocol')

  client.onerror = err => {
    this.setState(state => ({ ...state, status: 'Error' }))
    console.log('Connection Error')
    console.log(err)
  }

  client.onopen = () => {
    console.log('WebSocket Client Connected')
  }

  client.onclose = () => {
    console.log('echo-protocol Client Closed')
  }

  client.onmessage = ({ data }) => {
    try {
      const { event, payload } = JSON.parse(data)

      switch (event) {
        case 'sms:new':
          store.dispatch(addMessage({ text: payload.body }))
          break
      }
    } catch (err) {
      console.log(err)
    }
  }
}
