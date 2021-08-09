import React from 'react'
import PropTypes from 'prop-types'

import './Statistics.scss'

const Statistics = ({ good, neutral, bad, total, positivePercent }) => {
  return (
    <ul className="Statistics">
      <li className="Statistics_Item">
        Good
        <span>{good}</span>
      </li>

      <li className="Statistics_Item">
        Neutral
        <span>{neutral}</span>
      </li>
      <li className="Statistics_Item">
        Bad
        <span>{bad}</span>
      </li>
      <li className="Statistics_Item">
        Total
        <span>{total}</span>
      </li>
      <li className="Statistics_Item">
        Positive feedback
        <span>{positivePercent}%</span>
      </li>
    </ul>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercent: PropTypes.number,
}

export default Statistics
