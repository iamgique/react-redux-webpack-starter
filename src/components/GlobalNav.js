import React, { Component } from 'react'
import { Link } from 'react-router'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
  padding: '10px 20px', overflow: 'hidden', background: dark, color: light
}

styles.link = {
  padding: 11, color: light, fontWeight: 200
}

styles.activeLink = {
  padding: 11, color: light, fontWeight: 200, background: light,color: dark
}

class GlobalNav extends Component {

  constructor(props, context) {
    super(props, context)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    alert('log out')
  }

  render() {
    const { user } = this.props

    return (
      <div style={styles.wrapper}>
        <div className="container">
          <div style={{ float: 'left' }}>
            <Link to="/" style={styles.link}>Home</Link>{' '}
            <Link to="/todo" style={styles.link} activeStyle={styles.activeLink}>Todo List</Link>{' '}
            <Link to="/grades" style={styles.link} activeStyle={styles.activeLink}>Grades</Link>{' '}
            <Link to="/messages" style={styles.link} activeStyle={styles.activeLink}>Messages</Link>{' '}
          </div>
          <div style={{ float: 'right' }}>
            <Link style={styles.link} to="/profile">{user.name}</Link>
            <button className="btn btn-danger btn-xs" onClick={this.logOut}>log out</button>
          </div>
        </div>
      </div>
    )
  }
}

GlobalNav.defaultProps = {
  user: {
    id: 1,
    name: 'Ryan Gique Ja'
  }
}

export default GlobalNav