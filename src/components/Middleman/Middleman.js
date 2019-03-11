import React from 'react'
import PropTypes from 'prop-types'

import { VueWrapper } from 'vuera'
import MyVueComponent from './MyVueComponent.vue'

class Middleman extends React.Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.onClick({
      sender: 'middleman',
      version: '0.1.3',
      event: this.props.eventName,
    })
  }

  render () {
    return (
      <div className="middleman">
        <VueWrapper component={MyVueComponent} message="Hello from Vue!" />
        <button className="middleman__button" onClick={this.handleClick}>
          Emit Event {this.props.eventName}
        </button>
      </div>
    )
  }
}

Middleman.defaultProps = {
  onClick: null,
}

Middleman.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
}

export default Middleman
