import { HStack, VStack, Box, Button, Heading } from "@chakra-ui/react";
import hero from "../assets/restauranfood.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Hero(){
    const navigation = useNavigate();
    return (
        <article>
            <div className="hero"  >
        <div style={{marginLeft:"2%", marginRight:"2%"}}>
        <HStack spacing="2%" width="100%">
            <VStack width="50%" alignItems="flex-start">
                <Box>
                    <Heading as="h1"> Little Lemon </Heading>
                    <Heading as="h2"> Chicago </Heading>
                    <p>Some text some text some text some text some text some text some text some text some text some text</p>
                </Box>
            <Button colorScheme="yellow" marginTop="12%" size="md" 
            onClick={()=>navigation("/booking")}>Reserve a Table</Button>
            </VStack>
            <Box width ="50%" paddingTop="2%" paddingBottom="2%">
            <img src={hero} alt="Hero picture" max-width="100%"
            padding-top="14%" padding-bottom="14%" border-radius="2%"/> 
            </Box>      
        </HStack>
        </div>
        
    </div>
        </article>
    )
}

export default Hero;