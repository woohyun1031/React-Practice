import React from "react";
import { render, screen } from "@testing-library/react";
import { Cat } from "./Cat";
import { MemoryRouter } from "react-router-dom";

import userEvent from "@testing-library/user-event";

describe("Cat", () => {
  test("cat page 잘 뜨나?", () => {
    render(
      <MemoryRouter>
        <Cat />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: "고양이 추가하기" });

    userEvent.click(button);
    // 이 주석을 풀어보세요 :) 그럼 현재 화면에서의 스냅샷을 볼 수 있어요.
    screen.debug();

    // 주석을 풀고 보셔요! 테스트 실패겠지요!
    // expect(screen.getAllByText("고양이가 2마리 있어요!")).toBeTruthy();
    expect(screen.getAllByText("고양이가 2 마리 있어요!")).toBeTruthy();
  });
});
