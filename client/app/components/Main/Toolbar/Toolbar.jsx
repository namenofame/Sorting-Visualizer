import React, { Component } from "react";
import "./Toolbar.css";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  componentDidMount() {
    const { generateArray } = this.props;
    const { changeSpeed } =this.props;
    const al=87;
    const spd=570 - Math.pow(al, 2) > 0 ? 570 - Math.pow(al, 2) : 0;

    generateArray(al);
    changeSpeed(spd);

    document.getElementById("changeSize").value = 50;
    document.getElementById("changeSpeed").value=50;
  }

  handleClick(algorithm) {
    const { updateAlgorithm } = this.props;

    updateAlgorithm(algorithm);
  }

  handleChange(evt) {
    const { generateArray } = this.props;

    generateArray(Math.floor((parseInt(evt.target.value) + 3) * 1.65));
  }

  handleChange2(evt){
    const { changeSpeed } =this.props;
    const al=Math.floor((parseInt(evt.target.value) + 3) * 1.65);
    const spd=570 - Math.pow(al, 2) > 0 ? 570 - Math.pow(al, 2) : 0;

    changeSpeed(spd);
  }


  render() {
    const { array, speed, algorithm, generateArray, sort, isRunning } = this.props;
    let algorithmtype = "";
    if (algorithm) {
      algorithmtype += algorithm.slice(0, 1).toUpperCase();
      algorithmtype += algorithm.slice(1);
    }
    // const speed =
    //   570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;
    //console.log("speed:" + speed);
    const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "white";

    const cursor = isRunning ? "auto" : "pointer";

    return (
      // <div id="toolbar">
      //   <div
      //     className="badge badge-pill badge-primary"
      //     id={!isRunning ? "generateArray" : "generateArrayX"}
      //     style={{color: color, cursor: cursor}}
      //     onClick={!isRunning ? () => generateArray(array.length) : null}>
      //     Generate New Array
      //   </div>
      //   <div className="separator"></div>
      //   <div
      //     id="arraySize"
      //     style={{color: color}}>
      //     Change Array Size & Sorting Speed
      //   </div>
      //   <input
      //     id="changeSize"
      //     type="range"
      //     min="0"
      //     max="100"
      //     style={{background: color, cursor: cursor}}
      //     disabled={isRunning ? "disabled" : null}
      //     onChange={this.handleChange}
      //     />
      //   <div className="separator"></div>
      //   <div
      //     className={algorithm === "mergeSort" ? "currentAlgorithmButton" : "algorithmButton"}
      //     onClick={() => this.handleClick("mergeSort")}>
      //     Merge Sort
      //   </div>
      //   <div
      //     className={algorithm === "quickSort" ? "currentAlgorithmButton" : "algorithmButton"}
      //     onClick={() => this.handleClick("quickSort")}>
      //     Quick Sort
      //   </div>
      //   <div
      //     className={algorithm === "heapSort" ? "currentAlgorithmButton" : "algorithmButton"}
      //     onClick={() => this.handleClick("heapSort")}>
      //     Heap Sort
      //   </div>
      //   <div
      //     className={algorithm === "bubbleSort" ? "currentAlgorithmButton" : "algorithmButton"}
      //     onClick={() => this.handleClick("bubbleSort")}>
      //     Bubble Sort
      //   </div>
      //   <div
      //     className={algorithm === "selectionSort" ? "currentAlgorithmButton" : "algorithmButton"}
      //     onClick={() => this.handleClick("selectionSort")}>
      //     Selection Sort
      //   </div>
      //   <div
      //     className={algorithm === "insertionSort" ? "currentAlgorithmButton" : "algorithmButton"}
      //     onClick={() => this.handleClick("insertionSort")}>
      //     Insertion Sort
      //   </div>
      //   <div className="separator"></div>
      //   { algorithm ? <div
      //       id="sort"
      //       style={{color: color, cursor: cursor}}
      //       onClick={!isRunning ? () => sort(algorithm, array, speed) : null}>
      //       Sort!
      //     </div> : null
      //   }
      // </div>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <a className="navbar-brand" href="#">
            Sorting Visualizer
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a
                  className={
                    "nav-link btn btn-info " + (!isRunning ? "" : "disabled")
                  }
                  style={{ cursor: cursor, marginRight: 10 }}
                  onClick={
                    !isRunning ? () => generateArray(array.length) : null
                  }
                >
                  Generate New Array
                </a>
              </li>
              <li className="nav-item dropdown active">
                <button
                  className="nav-link btn btn-info dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {algorithm ? algorithmtype : "Algorithms"}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenu2"
                  style={{ backgroundColor: "#2a2636" }}
                >
                  <button
                    id="algorithmtype"
                    type="button"
                    className={
                      "dropdown-item btn " +
                      (algorithm === "mergeSort"
                        ? "btn-info"
                        : "btn-secondary ")
                    }
                    style={{ color: "#c1cf20" }}
                    onClick={() => this.handleClick("mergeSort")}
                  >
                    Merge Sort
                  </button>
                  <button
                    type="button"
                    className={
                      "dropdown-item btn " +
                      (algorithm === "quickSort"
                        ? "btn-info"
                        : "btn-secondary ")
                    }
                    style={{ color: "#c1cf20" }}
                    onClick={() => this.handleClick("quickSort")}
                  >
                    Quick Sort
                  </button>
                  <button
                    type="button"
                    className={
                      "dropdown-item btn " +
                      (algorithm === "heapSort" ? "btn-info" : "btn-secondary ")
                    }
                    style={{ color: "#c1cf20" }}
                    onClick={() => this.handleClick("heapSort")}
                  >
                    Heap Sort
                  </button>
                  <button
                    type="button"
                    className={
                      "dropdown-item bt " +
                      (algorithm === "bubbleSort"
                        ? "btn-info"
                        : "btn-secondary ")
                    }
                    style={{ color: "#c1cf20" }}
                    onClick={() => this.handleClick("bubbleSort")}
                  >
                    Bubble Sort
                  </button>
                  <button
                    type="button"
                    className={
                      "dropdown-item btn " +
                      (algorithm === "selectionSort"
                        ? "btn-info"
                        : "btn-secondary ")
                    }
                    style={{ color: "#c1cf20" }}
                    onClick={() => this.handleClick("selectionSort")}
                  >
                    Selection Sort
                  </button>
                  <button
                    type="button"
                    className={
                      "dropdown-item btn " +
                      (algorithm === "insertionSort"
                        ? "btn-info"
                        : "btn-secondary ")
                    }
                    style={{ color: "#c1cf20" }}
                    onClick={() => this.handleClick("insertionSort")}
                  >
                    Insertion Sort
                  </button>
                </div>
              </li>
              <li className="nav-item">
                <span
                  id="arraySize"
                  className="navbar-text"
                  style={{ color: color }}
                >
                  Change Array Size
                </span>
              </li>
              <li className="nav-item">
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    id="changeSize"
                    type="range"
                    min="0"
                    max="100"
                    style={{ background: color, cursor: cursor }}
                    disabled={isRunning ? "disabled" : null}
                    onChange={this.handleChange}
                  ></input>
                </form>
              </li>
              <li className="nav-item">
                <span
                  id="arraySpeed"
                  className="navbar-text"
                  style={{ color: color }}
                >
                  Change Sorting Speed    
                </span>
              </li>
              <li className="nav-item">
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    id="changeSpeed"
                    type="range"
                    min="0"
                    max="100"
                    style={{ background: color, cursor: cursor }}
                    disabled={isRunning ? "disabled" : null}
                    onChange={this.handleChange2}
                  ></input>
                </form>
              </li>
            </ul>
            <button
              id="sort"
              style={{ color: color, cursor: cursor }}
              type="button"
              className="btn btn-outline-primary"
              disabled={isRunning || !algorithm ? "disabled" : null}
              onClick={!isRunning ? () => sort(algorithm, array, speed) : null}
            >
              Sort!
            </button>
          </div>
        </nav>
        <div className="bar"></div>
      </div>
    );
  }
}

export default Toolbar;
