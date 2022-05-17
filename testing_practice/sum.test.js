const { sum, sumOf } = require("./sum");

describe("sum func", () => {
  it("calculates 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("calculates all numbers", () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});

//test : 새로운 테스트 케이스를 만드는 함수

//expect : 특정 값이 ~~ 일 것이다 라고 사전에 정의 후, 통과를 하면 테스트를 성공, 통과를 하지 않으면 테스트를 실패

//toBe (matchers 함수) : 특정 값이 어떤 조건을 만족하는지, 또는 어떤 함수가 실행이 됐는지, 에러가 났는지 등을 확인 할 수 있게 해줍니다.
//여기서 toBe 는 특정 값이 우리가 정한 값과 일치하는지 확인을 해줍니다.

//describe : 여러 테스트 케이스를 묶을 수 있다.
