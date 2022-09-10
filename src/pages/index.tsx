import { Flex, Img, Text } from "@chakra-ui/react";
import Link from "next/link";
import Banner from "../components/Banner";
import Carrosel from "../components/Carrosel";
import Header from "../components/Header";
import Travels from "../components/Travels";

export default function Home() {
  return (
    <Flex direction="column" height="100vh">
      <Header/>
      <Banner src="/images/banner/banner.svg"/>
      <Travels/>
      <Flex direction="column" justifyContent="center" align="center">
        <Text fontSize={["20px","36px"]} color="dark.36" lineHeight={["30px","54px"]}>Vamos nessa?</Text>
        <Text fontSize={["20px","36px"]} color="dark.36" lineHeight={["30px","54px"]}>Então escolha seu continente</Text>
      </Flex>
      <Flex justifyContent="center" align="center" marginY={["0","20"]} marginX={["0","28"]}>
        <Carrosel/>
      </Flex>
    </Flex>
  )
}
