import { StarIcon } from "@chakra-ui/icons";
import { Avatar, Container, Card, CardBody, VStack, Heading, Text, CardHeader, HStack, Icon } from "@chakra-ui/react";
import { stars } from "fontawesome";

const Testimonial = (props) => {
    const {stars, fName, review}=props;
    let starComponent=[];
    for(let i=0; i< stars; i++){
        starComponent.push(<StarIcon size="xs"/>);
    }
    return (
        <article>
            <Container>
                <Card size="sm" className="card">
                    <CardBody>
                        <VStack>
                            <HStack>
                                <HStack>
                                    {starComponent}
                                </HStack>
                            <Avatar size="sm"></Avatar>
                            <CardHeader>
                                <Heading size="sm">{fName}</Heading>
                            </CardHeader>
                            </HStack>
                            <Text className="card-text" fontSize="xs">{review}</Text>
                        </VStack>
                    </CardBody>
                </Card>
            </Container>
            </article>
    )
}

export default Testimonial;