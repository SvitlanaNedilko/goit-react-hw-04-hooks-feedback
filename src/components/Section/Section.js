import React from 'react'
import PropTypes from 'prop-types'

import './Section.scss'

const Section = ({ title, children }) => {
  return (
    <section className="Section">
      {title && <h2 className="Section_Title">{title}</h2>}
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Section
