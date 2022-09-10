import { Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface TypesProps
{
    icon: IconType;
    text: string;
}

export default function TypeTravel({icon,text}:TypesProps)
{
    return(

        <Flex direction="column" align="center">
            <Icon as={icon} fontSize={["16","80"]} color="highlight.100"/>
            <Text color="dark.36" fontSize={["xs","2xl"]}>{text}</Text>
        </Flex>
    )
}