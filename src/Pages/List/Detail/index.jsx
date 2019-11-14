import React, { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Axios from '../../../Services'

import styles from './styles'

const Detail = ({ classes, match, history }) => {
  const [dataDetail, setDataDetail] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(`/${match.params.name}`)
      setDataDetail(response.data)
    }

    fetchData()
  }, [])

  return (
    <div>
      {!isEmpty(dataDetail) && (
        <>
          <div className={classes.wrappedDetailsPost}>
            <h1 className={classes.Name}>{dataDetail.name}</h1>
          </div>
          <div className={classes.SameClass}>
            <img src={dataDetail.sprites.front_default} alt={dataDetail.name} />
            <img src={dataDetail.sprites.back_default} alt={dataDetail.name} />
            <img src={dataDetail.sprites.back_shiny} alt={dataDetail.name} />
            <img src={dataDetail.sprites.front_shiny} alt={dataDetail.name} />
          </div>
          <p className={classes.SameClass}>Type(s):</p>
          <div className={classes.SameClass}>
            {dataDetail.types.map(detailTypes => (
              <div key={detailTypes.type.name}>
                &nbsp;&nbsp;
                <span className={classes.Types}>{detailTypes.type.name}</span>
              </div>
            ))}
          </div>
          <p className={classes.SameClass}>Weight: {dataDetail.weight}</p>
          <p className={classes.SameClass}>Height: {dataDetail.height}</p>
          <div className={classes.WrapperButton}>
            <button
              type="button"
              className={classes.buttonBack}
              onClick={() => history.push('/')}
            >
              Back to List
            </button>
          </div>
        </>
      )}
    </div>
  )
}

Detail.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withStyles(styles)(Detail)
