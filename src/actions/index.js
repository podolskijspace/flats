const makeData = (data) => {
  return {
    type: 'MAKE_DATA',
    payload: data,
  }
}

const onLike = (id) => {
  return {
    type: 'ON_LIKE',
    payload: id,
  }
}



export {
  makeData,
  onLike
}