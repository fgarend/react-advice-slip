import { renderHook } from "@testing-library/react-hooks";

import useAdviceSlip from "./useAdviceSlip";

function makeFakeAdviceSlip(advice = "any_random_advice", id = "any_id") {
  return {
    slip: {
      id,
      advice,
    },
  };
}

function mockFetchRandomAdvice(adviceSlip = makeFakeAdviceSlip()) {
  const response = {
    json: jest.fn().mockName("response.json()").mockResolvedValue(adviceSlip),
  };

  jest.spyOn(global, "fetch").mockName("fetch").mockResolvedValue(response);

  return response.json;
}

describe("Hook: useAdviceSlip", () => {
  test("should return initial slip as an empty object", () => {
    const { result } = renderHook(() => useAdviceSlip());

    expect(result.current).toEqual({});
  });

  test("should get a new random advice slip after render", async () => {
    const adviceSlip = makeFakeAdviceSlip("first_advice", "first_id");
    mockFetchRandomAdvice().mockResolvedValueOnce(adviceSlip);

    const { result, waitForNextUpdate } = renderHook(() => useAdviceSlip());
    await waitForNextUpdate();

    expect(result.current).toEqual({
      advice: "first_advice",
      id: "first_id",
    });
  });
});
