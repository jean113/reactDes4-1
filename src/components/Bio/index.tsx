import { Flex, Text } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";
import Info from "../Info";

interface BioProps
{
    countries:number,
    languages:number,
    cities:number,
    children: ReactNode;
}

export default function Bio({countries, languages, cities, children}:BioProps)
{
    return(

        <Flex flexDirection={["column", "row"]}  marginX={["4","36"]} marginY={["4","20"]}>
            <Text fontSize={["14px","24px"]} lineHeight={["21px","36px"]} textAlign="justify" color="dark.36" 
                marginRight={["0","36"]}>
                {children}
            </Text>
            <Info countries={countries} languages={languages} cities={cities}/>
        </Flex>
    )
}