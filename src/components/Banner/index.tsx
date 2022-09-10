import { Flex, Image } from "@chakra-ui/react";

interface BannerProps
{
    src: string
}

export default function Banner({src}:BannerProps)
{
    return(
        <>
           <Flex>
                <Image src={src}/>  
           </Flex>
        </>
    );
}