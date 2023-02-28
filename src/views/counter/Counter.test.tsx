import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import {Counter} from "./Counter";

test("Counter button", () => {
  
  render(<Counter/>)

  expect(screen.getByText(/Clicked 0 Times/i)).toBeInTheDocument()

  fireEvent.click(screen.getByText(/Clicked 0 Times/i))

  expect(screen.getByText(/Clicked 1 Times/i)).toBeInTheDocument()
})