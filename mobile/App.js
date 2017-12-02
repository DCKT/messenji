// @flow

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import SmsListener from 'react-native-android-sms-listener'
import SmsAndroid from 'react-native-sms-android'

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '600'
  },
  status: {
    textAlign: 'center',
    fontSize: 26
  }
})

export default class App extends React.Component {
  state = {
    status: ''
  }

  constructor () {
    super()

    const client = new W3CWebSocket('ws://192.168.1.82:7878', 'echo-protocol')

    client.onerror = err => {
      this.setState(state => ({ ...state, status: 'Error' }))
      console.log('Connection Error')
      console.log(err)
    }

    client.onopen = () => {
      console.log('WebSocket Client Connected')
      this.socket = client
      this.setState(state => ({ ...state, status: 'Connected' }))
    }

    client.onclose = () => {
      console.log('echo-protocol Client Closed')
      this.setState(state => ({ ...state, status: 'Closed' }))
    }

    client.onmessage = function (e) {
      try {
        const { event, payload } = JSON.parse(e.data)

        switch (event) {
          case 'sms:send':
            this._sendSms(payload)
            break
        }
      } catch (err) {
        console.error(err)
      }
    }

    SmsListener.addListener(message => {
      if (this.socket) {
        this.socket.send(
          JSON.stringify({
            event: 'sms:received',
            payload: message
          })
        )
      }
    })
  }

  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.title}>Status</Text>
        <Text style={styles.status}>{this.state.status}</Text>
      </View>
    )
  }

  _sendSms = ({ number, message }) => {
    SmsAndroid.sms(number, message, 'sendDirect', (err, message) => {
      if (err) {
        console.log('err')
      } else {
        console.log(message) // callback message
      }
    })
  }
}
