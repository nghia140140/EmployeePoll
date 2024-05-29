import { render } from "@testing-library/react";
import React from "react";
import LeaderBoard from "./components/leaderBoard";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

describe("LeaderBoard", () => {
  test("will match snapshot", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <LeaderBoard />
        </BrowserRouter>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
