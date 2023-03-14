import React from 'react';
import {render, screen} from '@testing-library/react';

import {ListItems} from "./ListItems";

test("Items should be present", () => {

    render(<ListItems items={[
        {id: 1, label: "First item"},
        {id: 2, label: "Second item"},
        {id: 3, label: "Banana"},
    ]}/>);

    const element = screen.getByText("Banana");
    expect(element).toBeDefined();
})