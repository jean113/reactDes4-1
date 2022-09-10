import { Box, Flex, Text } from "@chakra-ui/react";
import Banner from "../../components/Banner";
import Bio from "../../components/Bio";
import Cities from "../../components/Cities";
import Header from "../../components/Header";

export default function Oceania()
{
    return(
        <Flex direction="column" height="100vh">
            <Header/>
            <Banner src="/images/banner/oceania.svg"/>

            <Bio cities={20} countries={16} languages={18}>
                Oceania é uma região geográficacomposta por vários grupos de ilhas do oceano Pacífico 
                (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador 
                francês Dumont d'Urville. O termo é usado hoje em vários idiomas para designar uma região 
                geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico 
                adjacentes.
            </Bio>

            <Box marginX={["4","36"]}>
                <Text fontWeight="500" fontSize={["24px","36px"]} lineHeight="54px" color="dark.36">
                    Cidades +100
                </Text>
                <Flex direction={["column", "row"]} marginX={["20","0"]} marginY="10">
                    <Cities src="/images/oceania/coast.svg" country="Austrália" city="Central Coast" flag="/images/oceania/flagAustralia.svg"/>
                    <Cities src="/images/oceania/makassar.svg" country="Indonésia" city="Makassar" flag="/images/oceania/flagIndonesia.svg"/>
                    <Cities src="/images/oceania/port.svg" country="Papua Nova Guiné" city="Port Moresby" flag="/images/oceania/flagNovaGuine.svg"/>
                    <Cities src="/images/oceania/sydney.svg" country="Austrália" city="Sydney" flag="/images/oceania/flagAustralia.svg"/>
                </Flex>
            </Box>
            
        </Flex>
    )
}