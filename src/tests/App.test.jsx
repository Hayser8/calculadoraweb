import React from "react"; // Asegúrate de añadir esta línea
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Calculator Functionality", () => {
  test("digit input and character limit", () => {
    render(<App />);
    const button1 = screen.getByText("1");
    for (let i = 0; i < 10; i++) {
      fireEvent.click(button1);
    }
    const display = screen.getByRole("heading"); // Asegúrate de que Display use <h1> o similar para este selector
    expect(display.textContent).toBe("111111111"); // Límite de 9 caracteres
  });


  test("division by zero error handling", () => {
    render(<App />);
    const button1 = screen.getByText("1");
    const divideButton = screen.getByRole("button", { name: "÷" });
    const button0 = screen.getByRole("button", { name: "0" });
    const equalsButton = screen.getByRole("button", { name: "=" });

    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button0);
    fireEvent.click(equalsButton);
    expect(screen.getByRole("heading").textContent).toBe("Error");
  });

  test("toggle sign functionality", () => {
    render(<App />);
    const button1 = screen.getByText("1");
    const toggleSignButton = screen.getByRole("button", { name: "±" });

    fireEvent.click(button1);
    fireEvent.click(toggleSignButton);
    expect(screen.getByRole("heading").textContent).toBe("-1");
    fireEvent.click(toggleSignButton);
    expect(screen.getByRole("heading").textContent).toBe("1");
  });

  test("decimal point input and formatting", () => {
    render(<App />);
    const button1 = screen.getByText("1");
    const decimalButton = screen.getByRole("button", { name: "." });
    fireEvent.click(button1);
    fireEvent.click(decimalButton);
    fireEvent.click(button1);
    expect(screen.getByRole("heading").textContent).toBe("1.1");
  });
});
