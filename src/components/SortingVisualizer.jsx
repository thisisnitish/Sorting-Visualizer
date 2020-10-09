import React from 'react';
import './SortingVisualizer.css';
//import * as SortingAlgorithms from  './sortingAlgorithms/sortingAlgorithms';
import {getMergeSortAnimations} from './sortingAlgorithms/Mergesort';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'blue';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

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
        for(let i=0; i<NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        
        for(let i=0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const[barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
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
            
            const mergeSortedArray = getMergeSortAnimations(array.slice());
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
            {/* Todo: 
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.insertionSort()}>Insertion Sort</button>
            <button onClick={() => this.selectionSort()}>Selection Sort</button> 
            <button onClick={() => this.quickSort()}>Quick Sort</button> 
            <button onClick={() => this.heapSort()}>Heap Sort Sort</button> 
            */}
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