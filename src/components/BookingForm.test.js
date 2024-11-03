import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./BookingForm";

jest.useFakeTimers();

describe("BookingForm", () => {
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();
  const mockAvailableTimes = {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };

  const defaultProps = {
    submitForm: mockSubmitForm,
    dispatch: mockDispatch,
    availableTimes: mockAvailableTimes,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders all form fields", () => {
    render(<BookingForm {...defaultProps} />);

    expect(screen.getByTestId("book-date")).toBeInTheDocument();
    expect(screen.getByTestId("book-time")).toBeInTheDocument();
    expect(screen.getByTestId("book-guests")).toBeInTheDocument();
    expect(screen.getByTestId("book-occasion")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  test("shows validation errors when submitting empty form", async () => {
    render(<BookingForm {...defaultProps} />);

    fireEvent.click(screen.getByTestId("submit-button"));

    await waitFor(() => {
      // Check for the actual error messages being displayed
      expect(
        screen.getByText(/Please select a valid date/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/Please select a time/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Must have at least 1 guest/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Please select a valid occasion/i)
      ).toBeInTheDocument();
    });

    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test("validates number of guests range", async () => {
    render(<BookingForm {...defaultProps} />);

    const guestsInput = screen.getByTestId("book-guests");
    fireEvent.change(guestsInput, { target: { value: "11" } });
    fireEvent.click(screen.getByTestId("submit-button"));

    await waitFor(() => {
      expect(screen.getByText(/Cannot exceed 10 guests/i)).toBeInTheDocument();
    });
  });

  test("calls submitForm when form is valid", async () => {
    render(<BookingForm {...defaultProps} />);

    // Fill in valid form data
    fireEvent.change(screen.getByTestId("book-date"), {
      target: { value: "2024-12-25" },
    });
    fireEvent.change(screen.getByTestId("book-time"), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByTestId("book-guests"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByTestId("book-occasion"), {
      target: { value: "Birthday" },
    });

    fireEvent.click(screen.getByTestId("submit-button"));

    await waitFor(() => {
      expect(mockSubmitForm).toHaveBeenCalled();
    });
  });

  test("dispatches date change event", () => {
    render(<BookingForm {...defaultProps} />);

    fireEvent.change(screen.getByTestId("book-date"), {
      target: { value: "2024-12-25" },
    });

    expect(mockDispatch).toHaveBeenCalledWith("2024-12-25");
  });
});
