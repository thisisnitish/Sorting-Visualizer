import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from './sortingAlgorithms/Mergesort';
import {getBubbleSortAnimations} from './sortingAlgorithms/BubbleSort';
import {getInsertionSortAnimations} from './sortingAlgorithms/InsertionSort';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;    // merge sort
const ANIMATION_SPEED_BS = 1;   // bubble sort
const ANIMATION_SPEED_IS = 1;   // insertion sort

// Change this value for the number of bars (value) in the array.
//const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

//after all the bars in the sorted orders
const SUCCESS_COLOR = '#03bafc';

export default class SortingVisualizer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            array: [],
            isFinished: false,

            stats: {
                name: '',
                complexity: '',
            },

            quickSort: false,
            mergeSort: false,
            heapSort: false,
            bubbleSort: false,
            insertionSort: false,
            size: 500,
        };
    }

    
    componentDidMount(){
        this.resetArray();
    }


    componentDidUpdate(prevprops, prevState){
        if(prevState.quickSort !== this.state.quickSort && this.state.quickSort === true)
            this.quickSort();
        if(prevState.bubbleSort !== this.state.bubbleSort && this.state.bubbleSort === true)
            this.bubbleSort();
        if(prevState.mergeSort !== this.state.mergeSort && this.state.mergeSort === true)
            this.mergeSort();
        if(prevState.insertionSort !== this.state.insertionSort && this.state.insertionSort === true)
            this.insertionSort();
        if(prevState.heapSort !== this.state.heapSort && this.state.heapSort === true)
            this.heapSort();
       
        //to render the real time size
        if(prevState.size !== this.state.size)
            this.resetArray();
    }


    resetArray(){
        const array = [];
        //to stop all timeout on the page
        var highestTimeoutId = setTimeout(';');
        for(var i=0; i<highestTimeoutId; i++){
            clearTimeout(i);
        }

        const arrayBars = document.getElementsByClassName('array-bar');
        for(let i=0; i<this.state.size; i++){
            array.push(randomIntFromInterval(5, 700));
        }

        for(let j=0; j<arrayBars.length; j++){
            //reset the color to original color i.e 
            const barOneStyle = arrayBars[j].style;
            barOneStyle.backgroundColor = PRIMARY_COLOR;
        }

        this.setState({
            array,
            isFinished: false,
            quickSort: false,
            mergeSort: false,
            heapSort: false,
            bubbleSort: false,
            insertionSort: false,
        });
    }


    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');
        
        for(let i=0; i<animations.length; i++){
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
        //giving the animation after all the array bars will be in the sorted order
        //giving success color to the array bar
        setTimeout(() => {
            for(let j=0; j<arrayBars.length; j++){
                const barOneStyle = arrayBars[j].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SUCCESS_COLOR;
                }, j);
            }
        }, animations.length * ANIMATION_SPEED_MS + 400);
        
        //managing the state and filling the stats in state regarding merge sort
        setTimeout(() => {
            this.setState({
                isFinished: !this.state.isFinished,
                stats: {
                    name: 'Merge Sort',
                    complexity: 'O(nLogn)',
                },
                mergeSort: false,
            });
        }, animations.length * ANIMATION_SPEED_MS + 500);
    }
     
    //Todo: Implement these also
    // quickSort() {}


    // heapSort() {}


    insertionSort() {
        const animations = getInsertionSortAnimations(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');

        for(let i=0; i<animations.length; i++){
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;

            if(i%2 === 0){
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_IS)
            }
            else{
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                    //Todo: Doubt
                    barOneStyle.height = `${animations[i][3]}px`;
                    barTwoStyle.height = `${animations[i][2]}px`;
                }, i * ANIMATION_SPEED_IS)
            }
        }

        //Now the array is sorted and now giving the animations of success color
        setTimeout(() => {
            for(let j=0; j<arrayBars.length; j++){
                const barOneStyle = arrayBars[j].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SUCCESS_COLOR;
                }, j)
            }
        }, animations.length + ANIMATION_SPEED_IS + 400);

        //managing the state and filling the stats regarding the bubble sort
        setTimeout(() => {
            this.setState({
                isFinished: !this.state.isFinished,
                stats: {
                    name: 'Insertion Sort',
                    complexity: 'O(N^2)',
                },
                insertionSort: false,
            });
        }, animations.length * ANIMATION_SPEED_IS + 500);
    }


    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');

        for(let i=0; i<animations.length; i++){
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            
            if(i%2 === 0){
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_BS)
            }
            else{
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                    //Todo: Doubt
                    barOneStyle.height = `${animations[i][3]}px`;
                    barTwoStyle.height = `${animations[i][2]}px`;
                }, i * ANIMATION_SPEED_BS)
            }
        }

        //Now the array is sorted and now giving the animations of success color
        setTimeout(() => {
            for(let j=0; j<arrayBars.length; j++){
                const barOneStyle = arrayBars[j].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SUCCESS_COLOR;
                }, j)
            }
        }, animations.length + ANIMATION_SPEED_BS + 400);

        //managing the state and filling the stats regarding the bubble sort
        setTimeout(() => {
            this.setState({
                isFinished: !this.state.isFinished,
                stats: {
                    name: 'Bubble Sort',
                    complexity: 'O(N^2)',
                },
                bubbleSort: false,
            });
        }, animations.length * ANIMATION_SPEED_BS + 500);
    }


    //function for form to give the size, if the user will try to give the array size more than 2000 then not increase more than 
    //2000
    handleChange = event => {
    //to allow only numbers
    const arraySize = event.target.value.replace(/\D/, '');
    this.setState({
      size: arraySize <= 2000 ? arraySize : 2000, //to limit the size at 2000
    });
    };

    render(){

        const {array} = this.state;
        const {complexity, name} = this.state.stats;

        return (
          <>
            {this.state.isFinished && (
                <div className="card top-right">
                    <h5 className="card-header">{name}</h5>
                    <div className="card-body">
                        <div className="card-text">
                            <ul className="list-unstyled">
                                <li>Array size: {array.length}</li>
                                <li>Time Complexity: {complexity}</li>
                            </ul>
                        </div>
                        <button 
                        className="bnt btn-outline-info"
                        onClick={() => this.resetArray()}
                        >Generate New Array</button>
                    </div>
                </div>
            )}

            <div className="container-fluid">
                <div
                className="row no-gutters border pt-4 mt-2 w-100 d-flex align-items-end"
                style={{minHeight: '90vh'}}>
                    <div className="col-12 pb-2">
                        {array.map((value, idx) => (
                            <div className="array-bar" key={idx} 
                            style={{
                                backgroundColor: PRIMARY_COLOR,
                                height: `${value}px`,
                                marginBottom: 0,
                                paddingBottom: 0,
                                width: `${ 95/ this.state.size}%`
                            }}></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container-fluid border">
                <div className="row no-gutters">
                    <div className="col-md-3 d-flex">
                        <label htmlFor="arraySize" style={{fontSize: '15px'}}>
                            <strong>Array Size</strong>
                        </label>
                        <input
                            id="array size"
                            name="size"
                            value={this.state.size}
                            onChange={this.handleChange}
                            type="text"
                            className="form-control align-self-center"
                            aria-describedby="array size"
                            placeholder="1000"
                            disabled={
                                this.state.mergeSort ||
                                this.state.bubbleSort ||
                                this.state.insertionSort
                                // this.state.quickSort ||
                                // this.state.heapSort
                            }
                        />
                        <small id="passwordHelpBlock" className="form-text text-muted pt-2">
                            Max Size 2000
                        </small>
                    </div>
                </div>
            </div>
          </>
        );
    };
}


const randomIntFromInterval = (min, max) => {
    //min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function arrayAreEqual(arrayOne, arrayTwo){
//     if(arrayOne.length !== arrayTwo.length) return false;
//     for(let i=0; i<arrayOne.length; i++){
//         if(arrayOne[i] !== arrayTwo[i]) return false;
//     }
//     return true;
// }

// export default SortingVisualizer;

// //function to test sorting algorithms
//     testSortingAlgorithms(){
//         for(let i=0; i<100; i++){
//             const array = [];
//             const length = randomIntFromInterval(1, 1000);
            
//             for(let i=0; i<length; i++){
//                 array.push(randomIntFromInterval(-1000, 1000));
//             }
//             const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            
//             const mergeSortedArray = getMergeSortAnimations(array.slice());
//             console.log(arrayAreEqual(javaScriptSortedArray, mergeSortedArray));
//         }
//     }
