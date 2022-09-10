import { Box, Flex, Text } from "@chakra-ui/react";
import Banner from "../../components/Banner";
import Bio from "../../components/Bio";
import Cities from "../../components/Cities";
import Header from "../../components/Header";

export default function AmericaNorte()
{
    return(
        <Flex direction="column" height="100vh">
            <Header/>
            <Banner src="/images/banner/americaNorte.svg"/>

            <Bio cities={20} countries={3} languages={6}>
                A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. 
                Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é 
                apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México 
                e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, 
                traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o 
                Panamá e a Colômbia). Pela última definição, a América do Norte incluiria a América Central Continental 
                e Insular (Caribe). 
            </Bio>

            <Box marginX={["4","36"]}>
                <Text fontWeight="500" fontSize={["24px","36px"]} lineHeight="54px" color="dark.36">
                    Cidades +100
                </Text>
                <Flex direction={["column", "row"]} marginX={["20","0"]}marginY="10">
                    <Cities src="/images/americaNorte/cidadeMexico.svg" country="México" city="Cidade do México" flag="/images/americaNorte/flagMexico.svg"/>
                    <Cities src="/images/americaNorte/montreal.svg" country="Canadá" city="Montreal" flag="/images/americaNorte/flagCanada.svg"/>
                    <Cities src="/images/americaNorte/novaIorque.svg" country="Estados Unidos" city="Nova Iorque" flag="/images/americaNorte/flagEUA.svg"/>
                    <Cities src="/images/americaNorte/toronto.svg" country="Canadá" city="Toronto" flag="/images/americaNorte/flagCanada.svg"/>
                </Flex>
            </Box>
            
        </Flex>
    )
}