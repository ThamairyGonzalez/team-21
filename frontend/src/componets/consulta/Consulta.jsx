import { Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { FormConsulta } from "./FormConsulta"


export const Consulta = () => {
  return (
    <Flex minW={"300px"} width={["100","100","95","90","90"]} flexDir={"column"}>
     <Header/>
     <FormConsulta/>
     
    <Footer/>
    </Flex>
  )
}
