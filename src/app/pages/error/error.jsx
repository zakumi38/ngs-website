import React from 'react'
import ErrorStyle from './error.module.sass'

function error() {
  return (
    <div className={ErrorStyle.errorBox}>
        <div>
            <h1 className={ErrorStyle.header}>Error : 404 </h1>
            <h2 className={ErrorStyle.subHeader}>Page Not Found</h2>
        </div>
    </div>
  )
}

export default error