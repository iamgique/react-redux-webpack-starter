import React, { Component } from 'react'
import { Link } from 'react-router'

class Dashboard extends Component {
  render() {
    const { courses } = this.props

    return (
      <div className="container">
      <div>
        <h2>Welcome to React Redux and Webpack</h2>
        <p>
          This project use 'Webpack' for dev server and build, 
        </p>
        <h2>Courses</h2>{' '}
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <Link to={`/course/${course.id}`}>{course.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
    )
  }
}

export default Dashboard
