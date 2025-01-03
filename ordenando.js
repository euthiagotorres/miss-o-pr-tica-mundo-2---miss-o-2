
const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
  };
  

  const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
      const pos1 = Math.floor(Math.random() * arr.length);
      const pos2 = Math.floor(Math.random() * arr.length);
      swap(arr, pos1, pos2);
    }
  };
  

  const bubble_sort = (arr) => {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          swap(arr, i, i + 1);
          swapped = true;
        }
      }
    } while (swapped);
  };
  

  const selection_sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(arr, i, minIndex);
      }
    }
  };
  

  const quick_sort = (arr, start, end) => {
    if (start < end) {
      const pivotIndex = particionamento(arr, start, end);
      quick_sort(arr, start, pivotIndex - 1);
      quick_sort(arr, pivotIndex + 1, end);
    }
  };

  const particionamento = (arr, start, end) => {
    const pivot = arr[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
      if (arr[j] < pivot) {
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, end);
    return i + 1;
  };
  