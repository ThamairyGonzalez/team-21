import { Flex, Img } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Header = ({imgUrl}) => {
  return (
    <Flex justify={'center'} h="100px" bg='primary.500'pt={2}>
    <Link to="/">
      <Img src={imgUrl} alt="logo" width={"250px"} />
    </Link>
  </Flex>
  )
}

export default Header