import { setArray } from "../reducers/array";
import { setCurrentSelectionTwo } from "../reducers/selectionSort";
import { setCurrentSwappers } from "../reducers/swappers";
import { setCurrentSorted } from "../reducers/sorted";
import { setRunning } from "../reducers/running";

function selectionSort(stateArray, dispatch, speed) {
  let array = stateArray.slice(0),
    toDispatch = [],
    sorted = false,
    round = 0;

  for (let i = 0; i < array.length - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < array.length; j++) {
      toDispatch.push([min_idx, j]);
      if (array[min_idx] > array[j]) min_idx = j;
    }
    if (min_idx !== i) {
      toDispatch.push([min_idx, i, true]);
      let tm = array[i];
      array[i] = array[min_idx];
      array[min_idx] = tm;
      toDispatch.push(array.slice(0));
      toDispatch.push([]);
    }
    toDispatch.push([true,i])
  }
  toDispatch.push([true,array.length-1])

  //   while (!sorted) {
  //     sorted = true;
  //     for (let i = 0; i < array.length - 1 - round; i++) {
  //       toDispatch.push([i, i + 1]);
  //       if (array[i] > array[i + 1]) {
  //         toDispatch.push([i, i + 1, true]);
  //         let temp = array[i];
  //         array[i] = array[i + 1];
  //         array[i + 1] = temp;
  //         sorted = false;
  //         toDispatch.push(array.slice(0));
  //         toDispatch.push([]);
  //       }
  //     }
  //     toDispatch.push([true, array.length - 1 - round]);
  //     round++;
  //   }
  handleDispatch(toDispatch, dispatch, array, speed);
  return array;
}

function handleDispatch(toDispatch, dispatch, array, speed) {
  if (!toDispatch.length) {
    dispatch(setCurrentSelectionTwo(array.map((num, index) => index)));
    setTimeout(() => {
      dispatch(setCurrentSelectionTwo([]));
      dispatch(setCurrentSorted(array.map((num, index) => index)));
      dispatch(setRunning(false));
    }, 900);
    return;
  }
  let dispatchFunction =
    toDispatch[0].length > 3
      ? setArray
      : toDispatch[0].length === 3 || toDispatch[0].length === 0
      ? setCurrentSwappers
      : toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean"
      ? setCurrentSorted
      : setCurrentSelectionTwo;
  dispatch(dispatchFunction(toDispatch.shift()));
  setTimeout(() => {
    handleDispatch(toDispatch, dispatch, array, speed);
  }, speed);
}

export default selectionSort;
