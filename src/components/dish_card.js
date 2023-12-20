import { Card, CardBody, Image, Heading, VStack, HStack, Text, CardHeader, Container } from "@chakra-ui/react"
const DishCard = (props) => {
    const { itemDescription, imageSrc,
        itemName, itemPrice,
        alt } = props.items;
    return (
        <Card size="sm" className="card">
            <CardBody>
                <VStack>
                    <Image src={imageSrc} alt={alt} />
                    <CardHeader>
                        <Heading size="sm">{itemName} {itemPrice}</Heading>
                    </CardHeader>
                    <Text className="card-text" fontSize="xs">{itemDescription}</Text>
                </VStack>
            </CardBody>
        </Card>
    )
}

export default DishCard;