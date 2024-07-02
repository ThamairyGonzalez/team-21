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
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="1.5rem"
          bg={colorMode === "dark" ? "brand.light" : "brand.dark"}
        >
          <Flex align="center" mr={5}>
            <Link to="/">
              <Img src="/img/logo1.png" alt="logo" w="5em" />
            </Link>
          </Flex>

          <HStack spacing={8} display={{ base: "none", sm: "flex" }}>
            <Link to={"/nosotros"}>Sobre Nosotros</Link>
            <Link to={"/interes"}>Sitios de Interes</Link>
            <Link to={"/consulta"}>Reservar</Link>
            <Box>
              <IconButton
                ml={4}
                aria-label="Toggle Color Mode"
                color={colorMode === "dark" ? "text.default" : "text.dark"}
                bg={"transparent"}
                icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
              />
            </Box>
          </HStack>

          <IconButton
            size="md"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ sm: "none" }}
            onClick={onOpen}
            color={colorMode === "dark" ? "text.default" : "text.dark"}
            bg={colorMode === "dark" ? "brand.default" : "brand.dark"}
          />
        </Flex>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent
            bg={colorMode === "dark" ? "brand.light" : "brand.dark"}
            color={colorMode === "dark" ? "text.dark" : "text.default"}
          >
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <VStack spacing={4} alignItems={'left'} >
                <Box borderLeft={"2px solid"} borderColor={" secondary.200"} pl={25}>
                  <Link to={"/nosotros"}  >Sobre Nosotros</Link>
                </Box>
                <Box borderLeft={"2px solid"} borderColor={" secondary.200"}pl={25}>
                  <Link to={"/room"}>Habitaciones</Link>
                </Box>
                <Box borderLeft={"2px solid"} borderColor={" secondary.200"}pl={25}>
                  <Link to={"/servicios"}>Nuestros Servicios</Link>
                </Box>
                <Box borderLeft={"2px solid"} borderColor={" secondary.200"}pl={25}>
                  <Link to={"/interes"}>Sitios de Interes</Link>
                </Box>

                <Button>
                  <Link to={"/consulta"}>Reservar</Link>
                </Button>
                <Box>
                  <IconButton
                    ml={4}
                    aria-label="Toggle Color Mode"
                    color={colorMode === "dark" ? "text.default" : "text.dark"}
                    bg={"transparent"}
                    icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                  />
                </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};
