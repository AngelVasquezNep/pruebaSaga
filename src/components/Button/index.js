import React from 'react'
import classnames from 'classnames'

export default ({ children, handleclick, className }) => (
  <button className={classnames("btn", className)} onClick={handleclick} >
    {children}
  </button>
)