import React from 'react'
import PropTypes from 'prop-types'

import './FeedbackOptions.scss'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="FeedbackOptions">
      {options.map((option) => (
        <li key={option}>
          <button
            className="FeedbackOptions_Button"
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
}

export default FeedbackOptions
