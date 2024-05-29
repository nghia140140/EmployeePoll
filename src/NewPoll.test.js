import { Provider } from "react-redux";
import New from "./components/new";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { fireEvent, render, screen } from "@testing-library/react";

describe("AddNew", () => {
  it("Test fireEvent AddNew component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <New />
        </BrowserRouter>
      </Provider>
    );

    const optionOne = screen.getByTestId("option-one");
    fireEvent.change(optionOne, { target: { value: "Option 1" } });
    const optionTwo = screen.getByTestId("option-two");
    fireEvent.change(optionTwo, { target: { value: "Option 2" } });
    const submitButton = screen.getByTestId("submit-button");

    expect(submitButton).not.toHaveAttribute("disabled");
  });
});
