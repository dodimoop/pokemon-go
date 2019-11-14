import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

// Import styles
import styles from './styles'

const Card = ({ classes, name, image, ...props }) => {
  return (
    <div className={classes.Card} {...props}>
      <img className={classes.Image} src={image} alt={name} />
      <p className={classes.Name}>{name}</p>
    </div>
  )
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default withStyles(styles)(Card)
