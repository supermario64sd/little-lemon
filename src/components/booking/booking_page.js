import { useEffect, useReducer, useState } from "react";
import BookingForm from "./booking_form";
import React from "react";

const BookingPage = (props)=>{
    const {isSubmitted,setIsSubmitted,bookingData, setBookingData}=props;
    const [formPage, setFormPage] = useState(0);
    
    useEffect(()=>{
        if(formPage===0)
            setFormPage(0);
    }, [formPage])

    const handleFormPageChange=(val)=>{
        setFormPage(formPage+val);
    }
    return (

            <BookingForm 
            isSubmitted={isSubmitted} 
            setIsSubmitted={setIsSubmitted}
            formPage={formPage}
            setFormPage={setFormPage}
            handleFormPageChange={handleFormPageChange} 
            bookingData={bookingData}
            setBookingData={setBookingData}/>
    )
}

export default BookingPage;