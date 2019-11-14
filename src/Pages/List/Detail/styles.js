const styles = {
  wrappedDetailsPost: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  Name: {
    textTransform: 'uppercase',
    padding: 20
  },
  SameClass: {
    display: 'flex',
    justifyContent: 'center'
  },
  Types: {
    borderRadius: 3,
    lineHeight: 2,
    height: 25,
    maxWidth: 110,
    margin: 0,
    width: 100,
    float: 'left',
    textTransform: 'uppercase',
    fontSize: 13,
    textAlign: 'center',
    backgroundColor: '#f3b300'
  },
  buttonBack: {
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
  },
  WrapperButton: {
    display: 'flex',
    justifyContent: 'center',
    padding: 30
  }
}

export default styles
