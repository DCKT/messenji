// @flow

export type WebSocketState = {|
  +client: ?Object
|}

const initialState: WebSocketState = {
  client: null
}

export const websocket = (state: WebSocketState = initialState, action) => {
  switch (action.type) {
    case 'WEBSOCKET/INIT':
      return {
        ...state,
        client: action.payload
      }
    default:
      return state
  }
}
