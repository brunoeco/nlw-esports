import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import App from "./App";

test('should have a tag with "Seu duo está aqui." text content', () => {
    const {getByText} = render(<App />);

    expect(getByText("Seu duo está aqui.")).toBeInTheDocument();
});