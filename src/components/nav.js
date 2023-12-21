import { Link as ReactRouter } from "react-router-dom";
import { Link as ChakraLink, HStack } from "@chakra-ui/react";

function Nav(props) {
    const linkMappings = props.links.map(l => {
        return (
            <nav>
                <ChakraLink as={ReactRouter} to={l.route} fontFamily="Markazi" fontSize=
                    "1em">
                    {l.stringLiteral}
                </ChakraLink>
            </nav>

        )
    })
    return (<>
        {linkMappings}
    </>


    )
}

export default Nav;