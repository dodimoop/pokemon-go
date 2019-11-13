import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

// Import styles
import styles from './styles'

const Header = ({ classes }) => {
  return (
    <div className={classes.Header}>
      <p className={classes.Title}>P O K E M O N - G O</p>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
