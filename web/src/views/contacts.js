// @flow

import React from 'react'
import { connect } from 'react-redux'
import { css } from 'glamor'

/**
 * Components
 */
import { ConversationResume } from '../components/ConversationResume'

/**
 * Utils
 */
import { type User } from '../utils/types'

/**
 * Styles
 */
const container = css({
  width: '100%'
})

type Props = {
  users: Array<User>
}

const BaseContacts = ({ users }: Props) => (
  <div {...container}>{users.map((user, i) => <ConversationResume key={i} user={user} />)}</div>
)

const mapStateToProps = ({ contacts }) => ({ users: contacts.list })

export const Contacts = connect(mapStateToProps)(BaseContacts)
