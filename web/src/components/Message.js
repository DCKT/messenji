// @flow

import React from 'react'
import { css } from 'glamor'

/**
 * Styles
 */
const rowStyle = (fromCurrentUser: boolean) =>
  css({
    textAlign: fromCurrentUser ? 'right' : 'left',
    marginBottom: '0.75rem'
  })

const messageStyle = (fromCurrentUser: boolean) =>
  css({
    display: 'inline-block',
    padding: '0.5rem 0.75rem',
    borderRadius: 3,
    backgroundColor: fromCurrentUser ? '#2196F3' : '#E0E0E0',
    boxShadow: '0px 2px 3px rgba(24,24,24, 0.1)',
    fontSize: '14px',
    textAlign: 'left',
    lineHeight: '20px',
    color: '#fff',
    maxWidth: '90%'
  })

export type MessageProps = {
  text: string,
  fromCurrentUser: boolean
}

export const Message = ({ fromCurrentUser, text }: MessageProps) => (
  <div {...rowStyle(fromCurrentUser)}>
    <div {...messageStyle(fromCurrentUser)}>{text}</div>
  </div>
)
