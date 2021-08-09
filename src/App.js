import React, { useState } from 'react'
import Statistics from './components/Statistics/Statistics'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Notification from './components/Notification/Notification'
import Section from './components/Section/Section'

import './App.scss'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const [statistics, setStatistics] = useState({
  //   good: 0,
  //   bad: 0,
  //   neutral: 0,
  // })

  // const handleIncrement = (key) => {
  //   setStatistics((prev) => {
  //     return {
  //       ...prev,
  //       [key]: prev[key] + 1,
  //     }
  //   })
  // }

  const handleIncrement = (key) => {
    switch (key) {
      case 'good':
        setGood((prevGood) => prevGood + 1)
        break
      case 'neutral':
        setNeutral((prevNeutral) => prevNeutral + 1)
        break
      case 'bad':
        setBad((prevBad) => prevBad + 1)
        break
    }
  }

  const countTotalFeedback = () => good + neutral + bad

  const countPositiveFeedbackPercentage = () =>
    parseInt((good / countTotalFeedback()) * 100)

  const isVisible = !!good || !!neutral || !!bad
  return (
    <div className="AppRoot">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Upload stats">
        {isVisible ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercent={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  )
}

export default App
