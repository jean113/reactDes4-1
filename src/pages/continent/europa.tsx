import { Box, Flex, Text } from "@chakra-ui/react";
import Banner from "../../components/Banner";
import Bio from "../../components/Bio";
import Cities from "../../components/Cities";
import Header from "../../components/Header";

export default function Europa()
{
    return(
        <Flex direction="column" height="100vh">
            <Header/>
            <Banner src="/images/banner/europa.svg"/>

            <Bio cities={27} countries={50} languages={60}>
                A Europa é, por convenção, um dos seis continentes do mundo. 
                Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a 
                leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro 
                a sudeste   
            </Bio>

            <Box marginX={["4","36"]}>
                <Text fontWeight="500" fontSize={["24px","36px"]} lineHeight="54px" color="dark.36">
                    Cidades +100
                </Text>
                <Flex direction={["column", "row"]} marginX={["20","0"]} marginY="10">
                    <Cities src="/images/europa/londres.svg" country="Reino Unido" city="Londres" flag="/images/europa/flagReinoUnido.svg"/>
                    <Cities src="/images/europa/paris.svg" country="França" city="Paris" flag="/images/europa/flagFranca.svg"/>
                    <Cities src="/images/europa/roma.svg" country="Itália" city="Roma" flag="/images/europa/flagItalia.svg"/>
                    <Cities src="/images/europa/amsterda.svg" country="Holanda" city="Amsterdã" flag="/images/europa/flagHolanda.svg"/>
                </Flex>
            </Box>
            
        </Flex>
    )
}