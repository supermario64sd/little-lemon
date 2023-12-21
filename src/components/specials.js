import Section from "./section";
import DishCard from "./dish_card";
import { Button, HStack, Heading, SimpleGrid , Box} from "@chakra-ui/react";
import salad from "../assets/greek-salad 2.jpg";
import bruchetta from "../assets/bruchetta.svg";
import dessert from "../assets/lemon dessert.jpg";
const Specials = () => {
    const specials = [
        {
            itemName: "Greek Salad",
            itemPrice: "$12.99",
            itemDescription: `The famous greek salad of crispy lettuce, peppers, 
            olives and our Chicago style feta cheese, 
            garnished with crunchy garlic and rosemary croutons. `,
            imageSrc: salad,
            alt: "a picture of salad"
        },
        {
            itemName: "Bruchetta",
            itemPrice: "$5.99",
            itemDescription: `Our Bruschetta is made from grilled bread that 
            has been smeared with garlic and seasoned with salt and olive oil. `,
            imageSrc: bruchetta,
            alt: "a picture of bruchetta"
        },
        {
            itemName: "Lemon Desert",
            itemPrice: "5.00",
            itemDescription: `This comes straight from grandma’s 
            recipe book, every last ingredient 
            has been sourced and is as authentic as can be imagined.`,
            imageSrc: dessert,
            alt: "a picture of dessert"
        }
    ]

    const cards = specials.map(s => {
        return (
            <section>
                <DishCard items={s} />
            </section>
        )
    })
    return (
        <div className="special">
            <div  id="special-section" position="relative" >
            <HStack marginLeft="2%" marginRight="2%" marginBottom="9%">
                <Heading as="h2">Specials</Heading>
                <Button colorScheme="yellow" size="md" position="absolute" right="2%">Online Menu</Button>
            </HStack>
            </div>
            <HStack id="special-card-stack">
            <SimpleGrid spacing={15} templateColumns='repeat(auto-fit, minmax(200px, 1fr))' overflow={"scroll"}>
                {cards}
            </SimpleGrid>
            </HStack>
        </div>
    )
}

export default Specials;