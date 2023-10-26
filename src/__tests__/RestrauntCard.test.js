import RestrauntCard from "../RestrauntCard";
import { render,screen } from '@testing-library/react'
import MOCK_DATA from '../mocks/mockData.json'
import "@testing-library/jest-dom"


test("should render RestrauntCard with props Data", () => {
    render(<RestrauntCard restrauntInfo={MOCK_DATA} />);
    const resCard = screen.getByText("KFC");
    expect(resCard).toBeInTheDocument();
})