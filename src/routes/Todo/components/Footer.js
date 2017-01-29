import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div className="container">
    <div className="well">
      <p>
        Show:
        {" "}
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </p>
    </div>
  </div>
)

export default Footer
