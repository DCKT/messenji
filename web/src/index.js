import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { css } from 'glamor'

/**
 * Pages
 */
import { ConversationDetails, Contacts } from './views/'

/**
 * Utils
 */
import './index.css'
import { store } from './store'
import { initWebsocket } from './utils/websocket'

/**
 * Styles
 */
const containerStyle = css({
  display: 'flex',
  width: '350px',
  margin: 'auto',
  background: '#fff',
  border: '1px solid #ccc',
  borderRadius: 4,
  padding: '1rem'
})

initWebsocket(store)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div {...containerStyle}>
        <Route exact path="/" component={Contacts} />
        <Route exact path="/:id" component={ConversationDetails} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
