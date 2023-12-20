import { Container, Heading, Box, HStack } from "@chakra-ui/react";
import Testimonial from "./testimonial";

const TestimonialSection = ()=>{
    const testimonies= [
        {
            numStars:3,
            name: "Naruto",
            review: "The bruchetta was really good."
        },
        {
            namStars:3,
            name: "Sasuke",
            review: "I really admired the atmosphere",
        },
        {
            numStars:3,
            name: "Itachi",
            review:"Great"
        },
        {
            numStars:2 ,
            name: "Sakura",
            review: "2 stars only because I wish I had more"
        }
    ]

    const testimonyElements= testimonies.map(t=>{
        
    })
    return (
        <Box id="testimonials" >
            <Heading as="h2" marginLeft="43%" marginRight="auto">Testimonials</Heading>
            <HStack>

            </HStack>
        </Box>
    )
}

export default TestimonialSection;