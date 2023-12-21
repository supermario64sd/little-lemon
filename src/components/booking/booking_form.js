import { Alert, AlertIcon, AlertTitle, Button, Card, CardBody, Container, FormControl, FormLabel, HStack, Input, Select, VStack, position } from "@chakra-ui/react";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"
import ContactStep from "./bookingsteps/contact";
import ExtraStep from "./bookingsteps/extra_info";
import TimeStep from "./bookingsteps/time";
import { ArrowBackIcon, ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";


const BookingForm = (props) => {

    const { isSubmitted,
        setIsSubmitted,
        formPage,
        handleFormPageChange,
        bookingData,
        setBookingData } = props;

    const onNextClick = () => handleFormPageChange(1);

    const onPrevClick = () => handleFormPageChange(-1);

    const [confirmationShown, setConfirmationShown] = useState(false);

    const contactFormik = useFormik({
        initialValues: {
            fName: "",
            lName: "",
            email: ""
        },
        validationSchema: Yup.object({
            fName: Yup.string().required('required'),
            lName: Yup.string().required('required'),
            email: Yup.string().email('invalid email address').required('required')
        }),
        onSubmit: (e) => {
            if (contactFormik.isValid) {
                onNextClick();
            }
        }
    });

    const timeFormik = useFormik({
        initialValues: {
            date: "",
            time: ""
        },
        validationSchema: Yup.object({
            date: Yup.date().required('required'),
            time: Yup.string().required()
        }),
        onSubmit: (e) => {
            if (timeFormik.isValid)
                onNextClick();
        }
    });

    const extraFormik = useFormik({
        initialValues: {
            guests: 0,
            occasion: "",
        },
        onSubmit: (e) => {
            if (extraFormik.isValid){
                setIsSubmitted(true);
                setBookingData({...timeFormik.values});
                extraFormik.resetForm();
                timeFormik.resetForm();
                contactFormik.resetForm();
                setConfirmationShown(true);
                setTimeout(()=>{
                    setConfirmationShown(false);
                }, 5000);
            }
        }
    })
    const pageList = [<ContactStep key="contact" formik={contactFormik} isDisabled={isSubmitted} />, 
    <TimeStep key="time" formik={timeFormik} isDisabled={isSubmitted}/>, 
    <ExtraStep key="extra" formik={extraFormik} isDisabled={isSubmitted}/>];
    const formikList = [contactFormik, timeFormik, extraFormik];

    return (
        <Container size="xs" position="relative" marginTop={"5%"}>
            <Card colorScheme="green">
                <CardBody >
                    <form onSubmit={extraFormik.handleSubmit} id="booking-form">
                        {pageList[formPage]}
                    </form>
                    <HStack>
                        {formPage > 0 && <Button onClick={onPrevClick} leftIcon={<ArrowBackIcon />}
                            position="absolute" bottom="4%" left="2%">Back</Button>}

                        <FormControl>
                            {formPage === pageList.length - 1 && <Button type="submit"
                                onClick={extraFormik.handleSubmit}
                                position="absolute" bottom="4%" right="2%">submit</Button>}
                        </FormControl>

                        {formPage != pageList.length - 1 &&
                            <Button rightIcon={<ArrowForwardIcon />} position="absolute" bottom="4%" right="2%"
                                onClick={formikList[formPage].handleSubmit}
                                isDisabled={(formikList[formPage].isValid && !formikList[formPage].dirty)
                                    || !formikList[formPage].isValid}>Next</Button>}
                    </HStack>
                </CardBody>
            </Card>
            {confirmationShown && <Alert marginTop={"4%"} colorScheme="green"><AlertIcon /> Your table has been booked</Alert>}
        </Container>
    )
}

export default BookingForm;