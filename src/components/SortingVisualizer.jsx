import React from 'react';
import './SortingVisualizer.css';
import * as SortingAlgorithms from  './sortingAlgorithms';

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
        const sortedArray = SortingAlgorithms.mergeSort(this.state.array);
    }

    //Todo: Implement these also
    // quickSort() {}

    // heapSort() {}

    // bubbleSort() {}

    render(){
        const {array} = this.state;

        return (
          <div className="array-container">
            {array.map((value, index) => (
              <div
                className="array-bar"
                key={index}
                style={{ height: `${value}px`, }}
            ></div>
            ))}
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            {/*
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.resetArray()}>Generate New Array</button> 
            */}
          </div>
        );
    };
}


function randomIntFromInterval(min, max){
    //min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// export default SortingVisualizer;