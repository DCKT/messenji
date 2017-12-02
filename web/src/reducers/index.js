import { combineReducers } from 'redux'
import { messages } from './messages'
import { contacts } from './contacts'
import { websocket } from './websocket'

export const reducers = combineReducers({
  messages,
  contacts,
  websocket
})
