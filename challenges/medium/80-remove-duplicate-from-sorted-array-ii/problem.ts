export const removeDuplicate = (nums: number[]): number => {
  let seniorPos = 1;

  for (let juniorPos = 1; juniorPos < nums.length; juniorPos++) {
    if (seniorPos == 1 || nums[seniorPos - 2] != nums[juniorPos]) {
      nums[seniorPos] = nums[juniorPos];
      seniorPos++;
    }
  }

  return seniorPos;
};
