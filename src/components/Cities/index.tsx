import { Box, Flex, Img, Text } from "@chakra-ui/react";

interface CitiesProps
{
    src:string;
    country: string;
    city: string;
    flag:string;
}

export default function Cities({src, country, city, flag}:CitiesProps)
{
    return(
            <Box marginRight={["0","12"]}>
                <Img src={src} width="64" height="44" borderRadius="4" marginBottom="2"/>
                <Flex justifyContent="center" margin="8">
                    <Box>
                        <Text fontSize="20px" fontWeight="600" fontFamily="Barlow" lineHeight="25px" color="dark.36"
                        marginBottom="25%">
                            {city}
                        </Text>
                        <Text fontSize="16px" fontFamily="Barlow" lineHeight="26px" color="dark.60">
                            {country}
                        </Text>
                    </Box>
                    <Img src={flag} marginLeft="24" width="8" height="8" borderRadius="20"/>
                </Flex>
            </Box>
    )
}