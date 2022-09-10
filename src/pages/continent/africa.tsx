import { Box, Flex, Text } from "@chakra-ui/react";
import Banner from "../../components/Banner";
import Bio from "../../components/Bio";
import Cities from "../../components/Cities";
import Header from "../../components/Header";

export default function Africa()
{
    return(
        <Flex direction="column" height="100vh">
            <Header/>
            <Banner src="/images/banner/africa.svg"/>

            <Bio cities={50} countries={54} languages={2000}>
            A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, 
            cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com 
            cerca de um bilhão de pessoas (estimativa para 2005), representando cerca de um sétimo da população mundial, e 54 países 
            independentes. Tem se transformado na ultima década em uma continente cada vez mais católico.
            </Bio>

            <Box marginX={["4","36"]}>
                <Text fontWeight="500" fontSize={["24px","36px"]} lineHeight={["36px","54px"]} color="dark.36">
                    Cidades +100
                </Text>
                <Flex direction={["column", "row"]} marginY="10" marginX={["20","0"]}>
                    <Cities src="/images/africa/abdjan.svg" country="Costa do Marfim" city="Abdjan" flag="/images/africa/flagCostaMarfim.svg"/>
                    <Cities src="/images/africa/cairo.svg" country="Egito" city="Cairo" flag="/images/africa/flagEgito.svg"/>
                    <Cities src="/images/africa/casablanca.svg" country="Marrocos" city="Casablanca" flag="/images/africa/flagMarrocos.svg"/>
                    <Cities src="/images/africa/lagos.svg" country="Nigéria" city="Lagos" flag="/images/africa/flagNigeria.svg"/>
                </Flex>
            </Box>
            
        </Flex>
    )
}