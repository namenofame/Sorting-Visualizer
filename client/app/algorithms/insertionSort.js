import { setArray } from "../reducers/array";
import { setCurrentInsertionTwo, SET_CURRENT_INSERTIONTWO } from "../reducers/insertionSort";
import { setCurrentSwappers } from "../reducers/swappers";
import { setCurrentSorted } from "../reducers/sorted";
import { setRunning } from "../reducers/running";

function insertionSort(stateArray, dispatch, speed) {
  let array = stateArray.slice(0),
    toDispatch = [],
    sorted = false,
    round = 0;

  toDispatch.push([true, 0]);
  for (let i = 1; i < array.length; i++) {
    //let greaterElementsArray = ["s"];
    let j = i - 1;
    while (j >= 0) {
      toDispatch.push([i, j]);
      if (array[i] >= array[j]) {
        break;
      }
      //greaterElementsArray.push(j);
      toDispatch.push([j]);
      j--;
    }
    let cur_value = array[i];
    for (let k = i; k > j + 1; k--) {
      array[k] = array[k - 1];
    }
    array[j + 1] = cur_value;
    toDispatch.push(["a", ...array]);
    toDispatch.push([])
    toDispatch.push([true, i]);
  }

  handleDispatch(toDispatch, dispatch, array, speed);
  return array;
}

function handleDispatch(toDispatch, dispatch, array, speed) {
  if (!toDispatch.length) {
    dispatch(setCurrentInsertionTwo(array.map((num, index) => index)));
    setTimeout(() => {
      dispatch(setCurrentInsertionTwo([]));
      dispatch(setCurrentSorted(array.map((num, index) => index)));
      dispatch(setRunning(false));
    }, 900);
    return;
  }
  if(toDispatch[0][0] === "a")
  {
    dispatch(setArray(toDispatch.shift().slice(1)));
  }
  else if(toDispatch[0].length <= 1 )
  {
      dispatch(setCurrentSwappers(toDispatch.shift()));
  }
  else if(toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean")
  {
    dispatch(setCurrentSorted(toDispatch.shift()));
  }
  else
  {
    dispatch(setCurrentInsertionTwo(toDispatch.shift()));
  }
  setTimeout(() => {
    handleDispatch(toDispatch, dispatch, array, speed);
  }, speed);
}

export default insertionSort;
