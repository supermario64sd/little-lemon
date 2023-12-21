import { Button, Card, CardBody, Container, FormControl, FormLabel,Input,Select, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
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
        <Container size="xs">
        <Card colorScheme="green">
            <CardBody >
            <form onSubmit={formik.handleSubmit} id="booking-form">
            <FormControl>
                <FormLabel>Choose Date</FormLabel>
                <Input type="date" id="date" name="date" onChange={formik.handleChange} value={formik.values.date}/>
            </FormControl>
            <FormControl>
                <FormLabel>Choose Time</FormLabel>
                <Select id="time" name="time" onChange={formik.handleChange} value={formik.values.time}>
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
                max="10" id="guests" name="guests" onChange={formik.handleChange} value={formik.values.guests}/>
            </FormControl>
            <FormControl>
            <FormLabel>Occasion</FormLabel>
            <Select id="occasion" name="occasion" onChange={formik.handleChange} value={formik.values.occasion}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </Select>
            </FormControl>
            <FormControl>
            <Button type="submit">submit</Button>
            </FormControl>
        </form>
            </CardBody>
            
        </Card>
        </Container>
        
        
        
    )
}

export default BookingForm;