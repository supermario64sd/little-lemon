import { useReducer } from "react";
import BookingForm from "./booking_form";

const BookingPage = ()=>{
    const updateTimes = (e)=>{
        let newTimes = availableTimes.filter(a=>{
            return a!= e;
        });

        setAvailableTimes(newTimes);
    }

    const initializeTimes =()=>{
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    }

    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes);

    return (
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
    )
}

export default BookingPage;