import React from 'react';
import './SortingVisualizer.css';
import * as SortingAlgorithms from  './sortingAlgorithms/sortingAlgorithms';

export default class SortingVisualizer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i=0; i<310; i++){
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    mergeSort() {
        const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a-b);
        const sortedArray = SortingAlgorithms.mergeSort(this.state.array);

        console.log(arrayAreEqual(javaScriptSortedArray, sortedArray));
    }

    //Todo: Implement these also
    // quickSort() {}

    // heapSort() {}

    // bubbleSort() {}

    //function to test sorting algorithms
    testSortingAlgorithms(){
        for(let i=0; i<100; i++){
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            
            for(let i=0; i<length; i++){
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            
            const mergeSortedArray = SortingAlgorithms.mergeSort(array.slice());
            console.log(arrayAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
    }

    render(){
        const {array} = this.state;

        return (
          <div className="array-container">
            {array.map((value, index) => (
              <div
                className="array-bar"
                key={index}
                style={{ height: `${value}px` }}
              ></div>
            ))}
            <button onClick={() => this.resetArray()}>
              Generate New Array
            </button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            {/*
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.resetArray()}>Generate New Array</button> 
            */}
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithms</button>
          </div>
        );
    };
}


function randomIntFromInterval(min, max){
    //min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayAreEqual(arrayOne, arrayTwo){
    if(arrayOne.length !== arrayTwo.length) return false;
    for(let i=0; i<arrayOne.length; i++){
        if(arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}

// export default SortingVisualizer;