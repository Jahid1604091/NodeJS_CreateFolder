import React from 'react'

const Footer = () => {
  return (
    <p style={{
      borderTop:'1px solid #e66b6b'
    }}>
          &copy;{new Date().getFullYear()} | All rights reserved | <a href='http://jahid1.xyz'>Jahid</a>
    </p>
  )
}

export default Footer