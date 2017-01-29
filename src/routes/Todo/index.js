module.exports = {
  path: 'todo',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/App'))
    })
  }
}
