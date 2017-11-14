// @flow

import React from 'react'
import { connect } from 'react-redux'
import { css } from 'glamor'

/**
 * Components
 */
import { Chat } from '../components/Chat'
import { type Message } from '../components/Message'

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

type Props = {
  messages: Array<Message>
}

const BaseConversationDetails = (props: Props) => (
  <div {...containerStyle}>
    <Chat messages={props.messages} user={{ name: 'Julie', phone: '+33651226051' }} />
  </div>
)

const mapStateToProps = ({ messages }) => ({ messages: messages.list })

export const ConversationDetails = connect(mapStateToProps)(BaseConversationDetails)
