import { act, fireEvent, render, screen } from '@testing-library/react';
import BookingForm from '../components/booking/booking_form';
import BookingPage from '../components/booking/booking_page';


test('renders Contact Form', ()=>{
    const handleFormPageChange = jest.fn();
    render(<BookingForm formPage={0} handleFormPageChange={handleFormPageChange}/>);

    act(()=>{
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();

    const fName = screen.getByLabelText("First Name*");
    expect(fName).toBeInTheDocument();

    const lName = screen.getByLabelText("Last Name*");
    expect(lName).toBeInTheDocument();

    const email = screen.getByLabelText("Last Name*");
    expect(email).toBeInTheDocument();

    fireEvent.change(fName, {target:{value: "bob"}});
    expect(submitButton).toBeDisabled;

    fireEvent.change(lName, {target:{value: "bob"}});
    expect(submitButton).toBeDisabled;

    fireEvent.change(email, {target:{value: "test@email.com"}});
    expect(submitButton).not.toBeDisabled;

    })
})

test('renders Time Form', ()=>{
    const handleFormPageChange = jest.fn();
    render(<BookingForm formPage={1} handleFormPageChange={handleFormPageChange}/>);

    act(()=>{
    const submitButton = screen.getAllByRole("button");
    expect(submitButton.length).toBe(2);
    
    const prevBtn = submitButton.filter(b=> b.innerHTML.includes("Back"));
    expect(prevBtn.length).toBe(1);
    expect(prevBtn[0]).not.toBeDisabled();

    const nextBtn = submitButton.filter(b=> b.innerHTML.includes("Next"));
    expect(nextBtn.length).toBe(1);
    expect(nextBtn[0]).toBeDisabled();

    debugger;
    const date = screen.getByLabelText("Choose Date*");
    expect(date).toBeInTheDocument();

    const time = screen.getByLabelText("Choose Time*");
    expect(time).toBeInTheDocument();


    fireEvent.change(date, {target: {value: "1234"}})
    expect(nextBtn[0]).toBeDisabled();
    
    fireEvent.change(time, {target: {value: "18:00"}});
    expect(nextBtn[0]).not.toBeDisabled();

    })
});

test('renders optional form inputs', ()=>{
    const handleFormPageChange = jest.fn();
    render(<BookingForm formPage={2} handleFormPageChange={handleFormPageChange}/>);

    const submitButton = screen.getAllByRole("button");
    expect(submitButton.length).toBe(2);

    const guests = screen.getByLabelText("Number of Guests");
    expect(guests).toBeInTheDocument();

    const occasion= screen.getByLabelText("Occasion");
    expect(occasion).toBeInTheDocument();

})