import React from 'react';
import {
    render,
    screen,
    fireEvent,
    getByPlaceholderText,
} from '@testing-library/react';
import {TodoContainer} from "./TodoContainer";
import {fireInputEvent} from "@testing-library/user-event/dist/keyboard/shared";

test("todo component behavior", () => {

    render(<TodoContainer/>)
    const input = screen.getByPlaceholderText(`what to do next?`) as HTMLInputElement
    const button = screen.getByTitle("add new todo")

    expect(input).toBeDefined()
    expect(button).toBeDefined()

    fireEvent.change(input, {target: {value: "new testing task"}})

    fireEvent.click(button)

    fireEvent.change(input, {target: {value: "another testing task"}})

    fireEvent.click(button)

    expect(screen.getByText(/new testing task/i)).toBeInTheDocument()
    expect(screen.getByText(/another testing task/i)).toBeInTheDocument()
})