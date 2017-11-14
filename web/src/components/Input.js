// @flow

import React from 'react'
import { css } from 'glamor'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * Actions
 */
import { addMessage } from '../actions/messages'

/**
 * Styles
 */
const containerStyle = css({
  marginTop: '0.5rem'
})

const inputStyle = css({
  display: 'block',
  width: '100%',
  padding: '0.5rem',
  borderRadius: 2,
  border: '1px solid #ddd',
  fontSize: 14,
  height: '38px'
})

class BaseInput extends React.Component {
  props: {
    addMessage: Function
  };

  state = {
    text: ''
  };

  render () {
    return (
      <div {...containerStyle}>
        <input
          type="text"
          placeholder="Type your message..."
          onChange={this._onChange}
          onKeyPress={this._onKeyPress}
          value={this.state.text}
          {...inputStyle}
        />
      </div>
    )
  }

  _onChange = e => {
    const { value } = e.target

    this.setState(state => ({ ...state, text: value }))
  };

  _onKeyPress = e => {
    const { text } = this.state

    if (e.key === 'Enter' && this.state.text) {
      this.props.addMessage({
        text,
        fromCurrentUser: true
      })
      this.setState(state => ({ ...state, text: '' }))
    }
  };
}

const mapDispatchToProps = dispatch => ({
  addMessage: bindActionCreators(addMessage, dispatch)
})

export const Input = connect(null, mapDispatchToProps)(BaseInput)
