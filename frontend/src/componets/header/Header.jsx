import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Img,
  Text,
  VStack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const Header = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          paddingRight="1.5rem"
          bg={colorMode === "dark" ? "brand.light" : "brand.dark"}
          color={"secondary.500"}
        >
          <Flex align="center" ml={15} h="100px">
            <Link to="/">
              <Img src="/img/Logo.svg" alt="logo" w="250px" />
            </Link>
          </Flex>

          <HStack spacing={8} display={{ base: "none", sm: "flex" }}>
            <Link to={"/nosotros"}>Sobre Nosotros</Link>
            <Link to={"/interes"}>Sitios de Interes</Link>
            <Link to={"/consulta"}>Reservar</Link>
            {/* <Box>
              <IconButton
                ml={4}
                aria-label="Toggle Color Mode"
                color={colorMode === "dark" ? "text.default" : "text.dark"}
                bg={"transparent"}
                icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
              />
            </Box> */}
          </HStack>

          <IconButton
            size="md"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ sm: "none" }}
            onClick={onOpen}
            color={colorMode === "dark" ? "secondary.500" : "text.dark"}
            bg={colorMode === "dark" ? "brand.default" : "brand.dark"}
          />
        </Flex>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent
            bg={colorMode === "dark" ? "brand.light" : "brand.dark"}
            color={colorMode === "dark" ? "secondary.500" : "text.default"}
          >
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <VStack spacing={4} alignItems={"left"}>
                <Box
                  borderLeft={"2px solid"}
                  borderColor={" secondary.200"}
                  pl={25}
                >
                  <Link to={"/nosotros"}>Sobre Nosotros</Link>
                </Box>
                <Box
                  borderLeft={"2px solid"}
                  borderColor={" secondary.200"}
                  pl={25}
                >
                  <Link to={"/room"}>Habitaciones</Link>
                </Box>

                <Box
                  borderLeft={"2px solid"}
                  borderColor={" secondary.200"}
                  pl={25}
                >
                  <Link to={"/interes"}>Sitios de Interes</Link>
                </Box>

                <Button>
                  <Link to={"/consulta"}>Reservar</Link>
                </Button>
                {/* <Box>
                  <IconButton
                    ml={4}
                    aria-label="Toggle Color Mode"
                    color={colorMode === "dark" ? "text.default" : "text.dark"}
                    bg={"transparent"}
                    icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                  />
                </Box> */}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};
