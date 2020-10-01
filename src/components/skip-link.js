import React from 'react'

function SkipLink() {
  return (
    <a
      href="#main"
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        height: 50,
        width: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      class="visually-hidden"
    >
      Skip to Content
    </a>
  )
}

export default SkipLink
