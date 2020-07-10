import { connect } from "react-redux";
import Body from "./Body.jsx";

const mapStateToProps = ({
  array,
  currentBubbleTwo,
  currentSelectionTwo,
  currentInsertionTwo,
  currentQuickTwo,
  pivot,
  currentSwappers,
  currentHeapThree,
  currentSorted,
  currentMergeX,
}) => ({
  array,
  currentBubbleTwo,
  currentSelectionTwo,
  currentInsertionTwo,
  currentQuickTwo,
  pivot,
  currentSwappers,
  currentHeapThree,
  currentSorted,
  currentMergeX,
});

const mapDispatchToProps = () => (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
