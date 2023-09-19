import React from 'react'

const Shape = (props) => {
  return (
    <div className='shape' style={{ background:props.color,width: '3.5rem',height:'3.5rem',borderRadius:'50%' }}></div>
  )
}

export default Shape