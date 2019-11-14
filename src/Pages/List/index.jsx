import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

import Axios from '../../Services/index'

// Import component and style
import styles from './styles'
import Card from '../../Components/Card/index'

const List = ({ classes, history }) => {
  const [result, setResult] = useState([])
  const [startOffset, setStartOffset] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(`?offset=${startOffset}&limit=20`)
      const dataResult = response.data.results
      const data = await Promise.all(
        dataResult.map(async item => {
          const getNewResponse = await Axios.get(`${item.name}`)
          const newResponse = getNewResponse.data
          return newResponse
        })
      )
      setResult([...result, ...data])
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
              <Card
                key={data.name}
                image={data.sprites.front_default}
                name={data.name}
                onClick={() => history.push(`detail/${data.name}`)}
              />
            ))}
          </div>
          <div className={classes.wrapperButton}>
            <button
              type="button"
              className={classes.loadMore}
              onClick={() => onLoadMore()}
            >
              Load More
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withStyles(styles)(List)
