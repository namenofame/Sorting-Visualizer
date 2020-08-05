import { combineReducers } from "redux";
import { array } from "./array";
import { speed } from "./speed";
import { algorithm } from "./algorithm";
import { currentBubbleTwo } from "./bubbleSort";
import { currentSelectionTwo } from "./selectionSort";
import { currentInsertionTwo } from "./insertionSort";
import { currentQuickTwo, pivot } from "./quickSort";
import { currentSwappers } from "./swappers";
import { currentHeapThree } from "./heapSort";
import { currentSorted } from "./sorted";
import { currentMergeX } from "./mergeSort";
import { isRunning } from "./running";

export default combineReducers({
  array,
  speed,
  algorithm,
  currentBubbleTwo,
  currentSelectionTwo,
  currentInsertionTwo,
  currentQuickTwo,
  pivot,
  currentSwappers,
  currentHeapThree,
  currentSorted,
  currentMergeX,
  isRunning,
});
