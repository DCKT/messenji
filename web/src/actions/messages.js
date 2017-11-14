export const addMessage = message => dispatch =>
  dispatch({
    type: 'MESSAGES/ADD',
    payload: message
  })

export const clearMessages = () => dispatch =>
  dispatch({
    type: 'MESSAGES/CLEAR'
  })
