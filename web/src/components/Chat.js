// @flow

import React from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

/**
 * Components
 */
import { Message, type MessageProps } from './Message'
import { Input } from './Input'
import IconLeft from 'react-icons/lib/md/keyboard-arrow-left'

/**
 * Actions
 */
import { clearMessages } from '../actions/messages'

/**
 * Utils
 */
import { type User } from '../utils/types'
/**
 * Styles
 */
const containerStyle = css({
  width: '100%'
})

const chatListStyle = css({
  height: '300px',
  overflow: 'auto'
})

const clearButtonStyle = css({
  border: 'none',
  padding: '0.5rem',
  background: '#E1F5FE',
  borderRadius: 4,
  cursor: 'pointer',
  marginTop: '5px'
})

const userHeader = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'right',
  paddingBottom: '0.5rem',
  marginBottom: '1rem',
  borderBottom: '1px solid #ccc'
})

const userNameStyle = css({
  fontWeight: '700',
  fontSize: '20px',
  color: '#242424',
  margin: 0
})

const iconHeader = css({
  cursor: 'pointer'
})

type ChatProps = {
  messages: Array<MessageProps>,
  user: User,
  clearMessages: Function
}

class BaseChat extends React.Component {
  props: ChatProps;

  componentDidUpdate () {
    this._autoScroll()
  }

  componentDidMount () {
    this._autoScroll()
  }

  render () {
    const { messages, user } = this.props

    return (
      <div {...containerStyle}>
        <div {...userHeader}>
          <Link to="/">
            <IconLeft size="32" {...iconHeader} />
          </Link>
          <div>
            <h3 {...userNameStyle}>{user.name}</h3>
            <small>{user.phone}</small>
          </div>
        </div>
        <div {...chatListStyle} ref={ref => (this._list = ref)}>
          {messages.map((message, i) => <Message key={i} {...message} />)}
        </div>
        <Input />
        {/* <button type="button" onClick={this._clearMessages} {...clearButtonStyle}>
          Clear
        </button> */}
      </div>
    )
  }

  _autoScroll = () => {
    if (this._list) {
      this._list.scrollTop = this._list.scrollHeight
    }
  };

  _clearMessages = () => {
    this.props.clearMessages()
  };
}

const mapDispatchToProps = dispatch => ({
  clearMessages: bindActionCreators(clearMessages, dispatch)
})

export const Chat = connect(null, mapDispatchToProps)(BaseChat)
