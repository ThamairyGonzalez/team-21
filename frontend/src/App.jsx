
import { Footer } from "./componets/footer/Footer";
import { About } from "./componets/about/About";
import { Header } from "./componets/header/Header";
import { Room } from "./componets/room/Room";
import { Service } from "./componets/service/Service";
import { Flex } from "@chakra-ui/react";
import { Reserve } from "./componets/reserve/Reserve";
import { Banner1 } from "./componets/banner1/Banner1";
import { PracticaStilos } from "./componets/header/PracticaStilos";

function App() {
  return (
    <Flex minW={"300px"} width={["100","100","95","90","90"]} flexDir={"column"}>
      <Header />
      <Banner1 />
      <About />
      <Room />
      <Service/>
      <PracticaStilos/>
      <Reserve/>
      <Footer />
    </Flex>
  );
}

export default App;
