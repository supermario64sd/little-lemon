import { Container, Heading, VStack, Card, CardHeader, CardBody, Text, Image } from "@chakra-ui/react"
import restaurantPic from "../../assets/restaurant.jpg";

const ConfirmedBooking = (props) => {
    const { isSubmitted, bookingData } = props;
    return (
        <Container textAlign={"center"} marginTop={"5%"}>
            <VStack>
                {isSubmitted && <>
                    <Heading as="h1">Booking Confirmed</Heading>
                    <Heading as="h2">Your Booking Has Been Confirmed!</Heading>
                   <VStack>
                   <Card marginTop={"5%"}>
                        <CardHeader>
                            <Heading as="h1">Reservation</Heading> 
                        </CardHeader>
                        <CardBody>
                            <Text>
                                Your reservation is at <b>{bookingData.time}</b>
                                <br/>on <b>{bookingData.date}.</b>
                            </Text>
                            <Image src={restaurantPic} alt="restaurant" />
                        </CardBody>
                    </Card>
                   </VStack>
                    
                </>
                }
                {
                    !isSubmitted && <>
                    <Heading as="h1">You don't have a reservation</Heading>
                    </>
                }
            </VStack>

        </Container>
    )
}

export default ConfirmedBooking;