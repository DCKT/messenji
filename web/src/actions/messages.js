import { send } from './websocket'

export const addMessage = message => (dispatch, getState) => {
  dispatch(
    send({
      event: 'web:send-sms',
      payload: message
    })
  )

  dispatch({
    type: 'MESSAGES/ADD',
    payload: message
  })
}
export const clearMessages = () => dispatch =>
  dispatch({
    type: 'MESSAGES/CLEAR'
  })
