import { combineReducers } from 'redux'
import { messages } from './messages'
import { contacts } from './contacts'

export const reducers = combineReducers({
  messages,
  contacts
})
