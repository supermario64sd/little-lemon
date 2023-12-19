import {Link as ReactRouter} from "react-router-dom";
import {Link as ChakraLink, HStack} from "@chakra-ui/react";

function Nav(props){
    const linkMappings= props.links.map(l=>{
        return (
        <ChakraLink as={ReactRouter} to={l.route} fontFamily="Markazi" fontSize=
        "18pt">
                {l.stringLiteral}
            </ChakraLink>
        )
    })
    return (<>
    {linkMappings}
    </>
            

    )
}

export default Nav;