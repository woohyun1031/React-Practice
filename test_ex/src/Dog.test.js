// Dog.test.js
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("Dog", () => {
  test("dog page 잘 뜨나?", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ).debug(); // .debug()를 붙이면 터미널에서 스냅샷을 볼 수 있어요!
  });
});
