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
            {colorMode==='dark'
            ?<Img src="/img/logo1.png" alt="logo" w="5em" />
            :<Img src="/img/logo.png" alt="logo" w="5em"/>}
            </Flex>

          <HStack spacing={8} display={{ base: "none", sm: "flex" }}>
            <Link to={'/nosotros'}>Sobre Nosotros</Link>
            <Link to={'/nosotros'}>Habitaciones</Link>
            <Link to={'/nosotros'}>Nuestros servicios</Link>
            <Link to={'/consulta'}>Reservar</Link>
            
          </HStack>
          <Box>
            <IconButton
              ml={4}
              aria-label="Toggle Color Mode"
              color={colorMode === "dark" ? "text.default" : "text.dark"}
              bg={'transparent'}
              icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </Box>
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
              <VStack spacing={4}>
                <Text>Sobre Nosotros</Text>
                <Text>Habitaciones</Text>
                <Text>Nuestros servicios</Text>
                <Text>Sitios de interés</Text>
                <Button>Reservar</Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};
