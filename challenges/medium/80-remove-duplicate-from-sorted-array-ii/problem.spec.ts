import { removeDuplicate } from "./problem";

describe("80. Remove duplicate from sorted array II", () => {
  test("Able to return total of sanitized duplicate", () => {
    const nums = [1, 1, 1, 2, 3];
    expect(removeDuplicate(nums)).toBe(4);
  });

  test("Able to handle duplicate slicing", () => {
    const nums = [1, 1, 2, 2, 3, 3];
    expect(removeDuplicate(nums)).toBe(6);
    expect(nums.slice(0, 6)).toStrictEqual([1, 1, 2, 2, 3, 3]);
  });

  test("Able to handle duplicate slicing #2", () => {
    const nums = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(removeDuplicate(nums)).toBe(9);
    expect(nums.slice(0, 9)).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 3, 4]);
  });
});
