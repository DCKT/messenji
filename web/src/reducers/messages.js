const initialState = {
  list: [
    {
      text: 'Hello world'
    },
    {
      text: 'Hello world'
    },
    {
      text: 'Hello world',
      fromCurrentUser: true
    }
  ]
}

export const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'MESSAGES/ADD':
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    case 'MESSAGES/CLEAR':
      return {
        ...state,
        list: []
      }
    default:
      return state
  }
}
