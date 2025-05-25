
const BookingService = {
  saveBooking: (movieId, userData, selectedSeats) => {
    const allBookings = JSON.parse(localStorage.getItem('bookings')) || {};
    allBookings[movieId] = allBookings[movieId] || [];
    allBookings[movieId].push({ userData, seats: selectedSeats });
    localStorage.setItem('bookings', JSON.stringify(allBookings));
  },

  getBookedSeats: (movieId) => {
    const allBookings = JSON.parse(localStorage.getItem('bookings')) || {};
    const bookingsForMovie = allBookings[movieId] || [];
    return bookingsForMovie.flatMap(b => b.seats);
  }
};

export default BookingService;
