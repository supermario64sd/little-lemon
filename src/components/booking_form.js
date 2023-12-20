import { Button, Container, FormControl, FormLabel,Input,Select, VStack } from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form } from "react-router-dom";


const BookingForm = () => {
    const formik = useFormik({
        initialValues: {
            date: null,
            time: null,
            guests: 0,
            occasion: "",
        }
    })
    return (
        <Container size="xs" backgroundColor="">
            <VStack id="booking-form" spacing={8}>
            <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormLabel>Choose Date</FormLabel>
                <Input type="date" />
            </FormControl>
            <FormControl>
                <FormLabel>Choose Time</FormLabel>
                <Select>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>

                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Number of Guests</FormLabel>
                <Input type="number" placeholder="1" min="1"
                max="10" id="guests"/>
            </FormControl>
            <FormControl>
            <FormLabel>Occasion</FormLabel>
            <Select>
                <option>Birthday</option>
                <option>Anniversary</option>
            </Select>
            </FormControl>
            <FormControl>
            <Button type="submit">submit</Button>
            </FormControl>
            
        </form>
        </VStack>
        </Container>
        
        
    )
}

export default BookingForm;