import { render, screen } from '@testing-library/react';
import BookingForm from './booking_form';
import BookingPage from '../components/booking_page';

test('renders Booking Form', () => {
  render(<BookingForm  />);
  const dateLabel = screen.getByText(/Choose Date/i);
  expect(dateLabel).toBeInTheDocument();

  const submitButton = screen.getAllByText(/submit/i);
  expect(submitButton).toBeInTheDocument();

});

test('renders Booking Page', ()=>{
    render(<BookingPage/>);

})