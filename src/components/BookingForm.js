import React from "react";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  date: Yup.date()
    .typeError("Please select a valid date") // Custom message for type error
    .required("Please select a date")
    .min(new Date(), "Date cannot be in the past"),
  time: Yup.string().required("Please select a time"),
  guests: Yup.number()
    .typeError("Please enter number of guests")
    .required("Please enter number of guests")
    .min(1, "Must have at least 1 guest")
    .max(10, "Cannot exceed 10 guests"),
  occasion: Yup.string()
    .required("Please select an occasion")
    .oneOf(["Birthday", "Anniversary"], "Please select a valid occasion"),
});

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = async () => {
    try {
      await validationSchema.validate(
        {
          date,
          time: times,
          guests: Number(guests),
          occasion,
        },
        { abortEarly: false }
      );
      return true;
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateForm();
    if (isValid) {
      props.submitForm(e);
    }
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <section id="booking" className="py-32 bg-[#495e57]">
      <div className="max-w-7xl px-10">
        <form
          onSubmit={handleSubmit}
          data-testid="booking-form"
          className="border border-white p-5 rounded-2xl"
        >
          <h1 className="text-white">Reserve a Table</h1>
          <fieldset className="flex flex-col gap-5">
            <div>
              <label className="text-white" htmlFor="book-date">
                Choose Date
              </label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                data-testid="book-date"
              />
              {errors.date && <span className="error">{errors.date}</span>}
            </div>
            <div>
              <label className="text-white" htmlFor="book-time">
                Choose Time
              </label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                data-testid="book-time"
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
              {errors.time && <span className="error">{errors.time}</span>}
            </div>
            <div>
              <label className="text-white" htmlFor="book-guests">
                Number of Guests
              </label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                type="number"
                placeholder={0}
                max={10}
                data-testid="book-guests"
              />
              {errors.guests && <span className="error">{errors.guests}</span>}
            </div>
            <div>
              <label className="text-white" htmlFor="book-occasion">
                Occasion
              </label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                data-testid="book-occasion"
              >
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
              {errors.occasion && (
                <span className="error">{errors.occasion}</span>
              )}
            </div>
            <div>
              <input
                aria-label="On Click"
                type="submit"
                value="Make Your Reservation"
                data-testid="submit-button"
                style={{
                  backgroundColor: "#f4ce14",
                  fontWeight: "bold",
                  cursor: "pointer",
                  border: "none",
                }}
              />
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
