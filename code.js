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

function* generatePermutations(arr, start = 0) {
  if (start === arr.length - 1) {
    yield arr.slice();
  } else {
    for (let i = start; i < arr.length; i++) {
      swap(arr, start, i);
      yield* generatePermutations(arr, start + 1);
      swap(arr, start, i);
    }
  }
}

function permutationSort(arr) {
  if (arr.length <= 1) return 1;

  let shuffleCount = 0;
  for (const perm of generatePermutations(arr)) {
    shuffleCount++;
    if (isSorted(perm)) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = perm[i];
      }
      return shuffleCount;
    }
  }


  return shuffleCount;
}
