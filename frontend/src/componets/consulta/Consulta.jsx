import { Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { Form } from "../form/Form"

export const Consulta = () => {
  return (
    <Flex minW={"300px"} width={["100","100","95","90","90"]} flexDir={"column"}>
     <Header/>
    <Link to={"/"}><Text color={'blue'} fontSize={'2em'} >Home</Text></Link>
     <Form/>
     
    <Footer/>
    </Flex>
  )
}
