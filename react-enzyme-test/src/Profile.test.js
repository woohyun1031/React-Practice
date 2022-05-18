import React from "react";
import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Profile username="woo1031" name="김우현" />);
    expect(wrapper).toMatchSnapshot();
  });
});

//mount : Enzyme을 통하여 리액트 컴포넌트를 렌더링
//이를 통해서 만든 wrapper 를 통해서 우리가 추후 props 조회, DOM 조회, state 조회 등을 할 수 있음
