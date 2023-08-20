import React from 'react';
import {render, screen} from '@testing-library/react';
import {Memory} from "./Memory";

test("Game should be present", () => {

    render(<Memory/>)

    const element = screen.getByText("restart");
    expect(element).toBeDefined();
})
