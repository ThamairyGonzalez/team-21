import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

const usuario = {
    nombre:'Omar',
    tecnologia:'react'
}
const propio="Omar"
const login = true
export const UsuarioProvider = ({children}) => {


    return (
    <UsuarioContext.Provider value={{usuario,login}}>
        {children}
    </UsuarioContext.Provider>
  )
}
