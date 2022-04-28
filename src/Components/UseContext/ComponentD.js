import React from 'react'
import {userContext} from './ComponentA'

function ComponentD() {
  const context = React.useContext(userContext)
  return (
    <div>
      
          <p>username:{context.username}</p>
          <p>Email:{context.email}</p>
          <p>phone:{context.phone}</p>

           
        

    </div>
  )
}

export default ComponentD