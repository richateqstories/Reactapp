import React from 'react'
import ComponentB from './ComponentB'

export const userContext = React.createContext()
function ComponentA() {
    const[user,setuser]=React.useState({
        username:'user123',
        phone:'9876543212',
        email:'user123@gmail.com'
    })
  return (
    <div>
        <userContext.Provider value={user}>
        <ComponentB/>
        </userContext.Provider>
        </div>
  )
}

export default ComponentA