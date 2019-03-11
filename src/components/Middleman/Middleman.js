import React from 'react'
import PropTypes from 'prop-types'

const Middleman = ({ onClick, eventName }) => (
  <button className="middleman__button" onClick={onClick}>
    Emit Event {eventName}
  </button>
)

Middleman.defaultProps = {
  onClick: null,
}

Middleman.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
}

export default Middleman
