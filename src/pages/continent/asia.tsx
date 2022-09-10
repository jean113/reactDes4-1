import { Box, Flex, Text } from "@chakra-ui/react";
import Banner from "../../components/Banner";
import Bio from "../../components/Bio";
import Cities from "../../components/Cities";
import Header from "../../components/Header";

export default function Asia()
{
    return(
        <Flex direction="column" height="100vh">
            <Header/>
            <Banner src="/images/banner/asia.svg"/>

            <Bio cities={20} countries={50} languages={7}>
                A Ásia é o maior dos continentes, tanto em área como em população. 
                Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase 
                três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a 
                Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a 
                América do Norte, pelo Estreito de Bering 
            </Bio>

            <Box marginX={["4","36"]}>
                <Text fontWeight="500" fontSize={["24px","36px"]} lineHeight="54px" color="dark.36">
                    Cidades +100
                </Text>
                <Flex direction={["column", "row"]} marginX={["20","0"]} marginY="10">
                    <Cities src="/images/asia/bangkok.svg" country="Tailândia" city="Bangkok" flag="/images/asia/flagTailandia.svg"/>
                    <Cities src="/images/asia/instambul.svg" country="Turquia" city="Instambul" flag="/images/asia/flagTurquia.svg"/>
                    <Cities src="/images/asia/mumbai.svg" country="Índia" city="Mumbai" flag="/images/asia/flagIndia.svg"/>
                    <Cities src="/images/asia/toquio.svg" country="Japão" city="Tóquio" flag="/images/asia/flagJapao.svg"/>
                </Flex>
            </Box>
            
        </Flex>
    )
}