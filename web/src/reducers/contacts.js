const initialState = {
  list: [
    {
      name: 'Julie',
      phone: '+33659519644',
      id: 1
    },
    {
      name: 'Thomas',
      phone: '+33659519644',
      id: 2
    },
    {
      name: 'John',
      phone: '+33659519644',
      id: 3
    }
  ]
}

export const contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACTS/FETCH':
      return {
        ...state,
        list: action.payload
      }
    default:
      return state
  }
}
