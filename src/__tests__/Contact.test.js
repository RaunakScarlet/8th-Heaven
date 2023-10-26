import Contact from '../Contact'
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load contact Us component", () => {
    render(<Contact />);
    
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("check 2 input box inside contact component", () => {

    render(<Contact/>)
    const input = screen.getAllByRole('textbox');

    expect(input.length).toBe(2);
})