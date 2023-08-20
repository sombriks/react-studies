import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Memory} from "./Memory";

test("Game should be present", () => {

    render(<Memory/>)
});

test("Cards should match", () => {

    render(<Memory/>)

    const element = screen.getByText("restart");
    expect(element).toBeDefined();

    const card1 = screen.getByTestId("1");
    expect(card1).toBeDefined();
    fireEvent.click(card1);

    const card2 = screen.getByTestId("8");
    expect(card2).toBeDefined();
    fireEvent.click(card2);

    expect(card1.textContent).toEqual(card2.textContent);
});

test("Cards should mismatch", () => {

    render(<Memory/>)

    const card3 = screen.getByTestId("3");
    expect(card3).toBeDefined();
    fireEvent.click(card3);

    const card4 = screen.getByTestId("4");
    expect(card4).toBeDefined();
    fireEvent.click(card4);

    const label = screen.getByText("Cards didn't match!");
    expect(label).toBeDefined();
})
