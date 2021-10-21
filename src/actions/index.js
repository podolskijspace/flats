const makeData = (data) => {
  return {
    type: 'MAKE_DATA',
    payload: data,
  }
}

export {
  makeData,
}