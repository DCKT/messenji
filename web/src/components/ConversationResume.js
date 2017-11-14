// @flow

import React from 'react'
import { css } from 'glamor'
import { Link } from 'react-router-dom'

/**
 * Utils
 */
import { type User } from '../utils/types'

/**
 * Styles
 */
const linkContainer = css({
  display: 'flex',
  alignItems: 'center',
  color: '#242424',
  textDecoration: 'none',
  padding: '0.5rem 0',
  '&:hover': {
    backgroundColor: '#F5F5F5'
  },
  '&:not(:last-child)': {
    borderBottom: '1px solid #eee'
  }
})

const userName = css({
  fontSize: '18px',
  marginTop: 0,
  marginBottom: 0
})

const userPhone = css({
  fontSize: '12px',
  color: '#666'
})

const userPicture = css({
  maxWidth: '40px',
  borderRadius: '4px',
  marginLeft: '0.5rem',
  marginRight: '1rem'
})

type Props = {
  user: User
}

export const ConversationResume = ({ user }: Props) => (
  <Link to={`/${user.id}`} {...linkContainer}>
    <img src={`https://github.com/identicons/${user.name}.png`} {...userPicture} />
    <div>
      <h3 {...userName}>{user.name}</h3>
      <small {...userPhone}>{user.phone}</small>
    </div>
  </Link>
)
