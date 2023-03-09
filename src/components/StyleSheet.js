import React from 'react'
import './myStyles.css'

// CSS style sheets
function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
        <h2 className={className}>StyleSheet</h2>
    </div>
  )
}

export default StyleSheet