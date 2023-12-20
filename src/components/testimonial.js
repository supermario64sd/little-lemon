import { Avatar, Container, Card, CardBody, VStack, Heading, Text, CardHeader, HStack, Icon } from "@chakra-ui/react";

const Testimonial = (props) => {
    return (
        <div>
            <Container>
                <Card size="sm" className="card">
                    <CardBody>
                        <VStack>
                            <HStack>
                                <HStack>
                                    <Icon></Icon>
                                </HStack>
                            <Avatar size="sm"></Avatar>
                            <CardHeader>
                                <Heading size="sm"></Heading>
                            </CardHeader>
                            </HStack>
                            <Text className="card-text" fontSize="xs"></Text>
                        </VStack>
                    </CardBody>
                </Card>
            </Container>

        </div>
    )
}

export default Testimonial;