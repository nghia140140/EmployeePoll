import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

describe("App", () => {
  test("should render login", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const loginTitle = screen.getByText("Login");
    expect(loginTitle).toBeInTheDocument();
  });
});
