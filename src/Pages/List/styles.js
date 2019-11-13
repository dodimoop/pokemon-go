const styles = {
  List: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },

  body: {
    // display: 'flex'
  },

  wrapperButton: {
    display: 'flex',
    justifyContent: 'center'
  },

  loadMore: {
    color: '#ffffff',
    width: '10%',
    border: 'none',
    height: 40,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#FE5350',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      cursor: 'pointer'
    }
  }
}

export default styles
