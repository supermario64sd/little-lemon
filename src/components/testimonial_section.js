import { Container, Heading, Box, HStack } from "@chakra-ui/react";
import Testimonial from "./testimonial";

const TestimonialSection = ()=>{
    const testimonies= [
        {
            numStars:3,
            fName: "Naruto",
            review: "The bruchetta was really good."
        },
        {
            numStars:3,
            fName: "Sasuke",
            review: "I really admired the atmosphere",
        },
        {
            numStars:3,
            fName: "Itachi",
            review:"Great"
        },
        {
            numStars:2 ,
            fName: "Sakura",
            review: "2 stars only because I wish I had more"
        }
    ]

    const testimonyElements= testimonies.map(t=>{
        return (
            <Testimonial fName={t.fName} stars={t.numStars} review={t.review}/>
        )
    })
    return (
        <section>
            <Box id="testimonials" width="100%" >
            <Heading as="h2" marginLeft="43%" marginRight="auto" paddingTop="5%">Testimonials</Heading>
            <HStack paddingTop="5%" overflow="scroll">
                {testimonyElements}
            </HStack>
        </Box>
        </section>
        
    )
}

export default TestimonialSection;