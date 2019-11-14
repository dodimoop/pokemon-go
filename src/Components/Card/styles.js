const styles = {
  Card: {
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    width: 150,
    height: 150,
    maxHeight: 150,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 30,
    padding: 40,
    cursor: 'pointer',

    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    }
  },
  Name: {
    textTransform: 'uppercase'
  }
}

export default styles
