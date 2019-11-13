import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

// Import styles
import styles from './styles'

const Card = ({ classes, name }) => {
  return (
    <div className={classes.Card}>
      <p>{name}</p>
    </div>
  )
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
}

export default withStyles(styles)(Card)
