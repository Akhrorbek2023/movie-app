import React from 'react'
import "../spinner.css"

export const Spinner = () => {
  return (
    <div className='leader'>
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
