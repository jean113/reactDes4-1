import { Box, Flex, Text } from "@chakra-ui/react";
import Banner from "../../components/Banner";
import Bio from "../../components/Bio";
import Cities from "../../components/Cities";
import Header from "../../components/Header";

export default function AmericaSul()
{
    return(
        <Flex direction="column" height="100vh">
            <Header/>
            <Banner src="/images/banner/americaSul.svg"/>

            <Bio cities={27} countries={10} languages={5}>
                A América do Sul é um continente que compreende a porção meridional da América. 
                Também é considerada um subcontinente do continente americano.
                A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. 
                Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de 
                Drake. Tem uma extensão de 7 500 km desde o mar do Caribe até ao cabo Horn, ponto extremo sul do 
                continente. Os outros pontos extremos da América do Sul são: ao norte a Punta Gallinas, na Colômbia, 
                ao leste a Ponta do Seixas, no Brasil, e a oeste a Punta Pariñas, no Peru. Seus limites naturais são: 
                ao norte com o mar do Caribe; a leste, nordeste e sudeste com o oceano Atlântico; e a oeste com o oceano 
                Pacífico. O Brasil representa atualmente a metade da população e produto econômico desta região. 
            </Bio>

            <Box marginX={["4","36"]}>
                <Text fontWeight="500" fontSize={["24px","36px"]} lineHeight="54px" color="dark.36">
                    Cidades +100
                </Text>
                <Flex direction={["column", "row"]} marginX={["20","0"]} marginY="10">
                    <Cities src="/images/americaSul/bogota.svg" country="Colômbia" city="Bogotá" flag="/images/americaSul/flagColombia.svg"/>
                    <Cities src="/images/americaSul/buenosAires.svg" country="Argentina" city="Buenos Aires" flag="/images/americaSul/flagArgentina.svg"/>
                    <Cities src="/images/americaSul/fortaleza.svg" country="Brasil" city="Fortaleza" flag="/images/americaSul/flagBrasil.svg"/>
                    <Cities src="/images/americaSul/lima.svg" country="Peru" city="Lima" flag="/images/americaSul/flagPeru.svg"/>
                </Flex>
            </Box>
            
        </Flex>
    )
}