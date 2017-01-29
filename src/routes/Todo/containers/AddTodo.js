import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="container">
      <div className="jumbotron">
        <p>Add Todo</p>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
        <div className="input-group">
          <input className="form-control" placeholder="Input Todo hear...." ref={node => { input = node }} />
          <div className="input-group-btn">
            <button type="submit" className="btn btn-default">Add Todo</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
