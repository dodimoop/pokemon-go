import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

import Axios from '../../Services/index'

// Import component and style
import Card from '../../Components/Card/index'

import styles from './styles'

const List = ({ classes }) => {
  const [result, setResult] = useState([])
  const [startOffset, setStartOffset] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(`?offset=${startOffset}&limit=20`)
      setResult([...result, ...response.data.results])
    }

    fetchData()
  }, [startOffset])

  const onLoadMore = () => {
    setStartOffset(startOffset + 20)
  }

  return (
    <div className={classes.root}>
      {!isEmpty(result) && (
        <div className={classes.body}>
          <div className={classes.List}>
            {result.map(data => (
              <Card key={data.name} name={data.name} clickable />
            ))}
          </div>
          <div className={classes.wrapperButton}>
            <button
              type="button"
              className={classes.loadMore}
              onClick={() => onLoadMore()}
            >
              load more
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(List)
