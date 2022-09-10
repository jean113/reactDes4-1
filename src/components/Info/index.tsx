import { Box, Flex, Text } from "@chakra-ui/react";

interface BioProps
{
    countries: number;
    languages: number;
    cities: number;
}

export default function Info({cities,countries,languages} : BioProps )
{
    return(
        <Flex>
            <Flex direction="column" align="center" marginRight="10">
                <Text fontWeight="500" fontSize={["24px","48px"]} lineHeight={["36px","72px"]} color="highlight.100">{countries}</Text>
                <Text fontWeight="500" fontSize={["18px","24px"]} lineHeight={["27px","36px"]} color="dark.36">países</Text>
            </Flex>
            <Flex direction="column" align="center" marginRight="10">
                <Text fontWeight="500" fontSize={["24px","48px"]} lineHeight={["36px","72px"]} color="highlight.100">{languages}</Text>
                <Text fontWeight="500" fontSize={["18px","24px"]} lineHeight={["27px","36px"]} color="dark.36">línguas</Text>
            </Flex>
            <Flex direction="column" align="center">
                <Text fontWeight="500" fontSize={["24px","48px"]} lineHeight={["36px","72px"]} color="highlight.100">{cities}</Text>
                <Text fontWeight="500" fontSize={["18px","24px"]} lineHeight={["27px","36px"]} color="dark.36">cidades+100</Text>
            </Flex>
        </Flex>
    )
}