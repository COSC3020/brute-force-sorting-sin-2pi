function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function nextPermutation(arr) {
  let i = arr.length - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
      j--;
    }
    swap(arr, i, j);
  }
  reverse(arr, i + 1);
  return i >= 0;
}

function reverse(arr, start) {
  let i = start, j = arr.length - 1;
  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
}

function permutationSort(arr) {
  if (isSorted(arr)) return 1;

  let attempts = 1;
  while (!isSorted(arr)) {
    nextPermutation(arr);
    attempts++;
  }

  return attempts;
}
