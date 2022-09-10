import { Flex, Image } from "@chakra-ui/react";

export default function Header()
{
    return(
        <>
            <Flex as="header" width="100%" maxWidth={1440} height="25" align="center" justifyContent="center"
            paddingY="7">
                <Image src="/images/logo.svg" alt="world trip" width={["20","44"]} height="10"/>
            </Flex>
        </>
    );
}