import { Flex } from "@chakra-ui/react";
import { FaCocktail } from "react-icons/fa";
import { GiGreekTemple, GiPisaTower, GiSurfBoard, GiWorld } from "react-icons/gi";
import TypeTravel from "./TypeTravel";

export default function Travels()
{
    return(
        <>
            <Flex justifyContent={["space-between"]} flexWrap="wrap" paddingX={["4","36"]} paddingY={["4","20"]}>
               <TypeTravel icon={FaCocktail} text="vida noturna"/>
               <TypeTravel icon={GiSurfBoard} text="praia"/>
               <TypeTravel icon={GiPisaTower} text="moderno"/>
               <TypeTravel icon={GiGreekTemple} text="clássico"/>
               <TypeTravel icon={GiWorld} text="e mais..."/>
            </Flex>
        </>
    )
}