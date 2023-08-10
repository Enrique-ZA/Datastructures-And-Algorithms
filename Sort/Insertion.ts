const arr = [5, 2, 4, 6, 1, 3];

/**
 * Insertion sort
 * @param {T[]} s - array to sort
 * @param {number} n - length of array
 * @returns {T[]} - sorted array
 * @description - Sorts an array of numbers in ascending order
 * @worst-case time complexity - O(n^2)
 * @worst-case space complexity - O(1)
 * @average-case time complexity - O(n^2)
 * @average-case space complexity - O(1)
 * @best-case time complexity - O(n)
 * @best-case space complexity - O(1)
 * @stability - stable
 **/
function insertionSort<T>(s: T[], n: number): T[] {
  let i: number, j: number; // counters
  for (i = 1; i < n; ++i) {
    j = i;
    while (j > 0 && s[j] < s[j - 1]) {
      // swap: j and j-1
      [s[j], s[j - 1]] = [s[j - 1], s[j]];
      --j;
    }
  }
  return s;
}

console.log(insertionSort(arr, arr.length));
