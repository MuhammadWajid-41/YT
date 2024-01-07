"use client"
import React, { createContext } from "react"

export const MyContext = createContext()

const Context = ({children}) =>
{
    const user = "Wajid Ahmad"
  return (
    <div>
        <MyContext.Provider value={user}>
            {children}
        </MyContext.Provider>
    </div>
  )
}
export default Context