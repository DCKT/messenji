export const initWebSocket = client => dispatch =>
  dispatch({
    type: 'WEBSOCKET/INIT',
    payload: client
  })

export const send = ({ event, payload }) => (dispatch, getState) => {
  const { websocket } = getState()

  websocket.client.send(
    JSON.stringify({
      event,
      payload
    })
  )
}
