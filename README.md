
# Sorting Visualizer

## under-development

A Web App built using ReactJS. It is used to visualize the sorting algorithms such as Merge Sort, Bubble Sort etc.
The purpose of creating this project was to visualize all the classic sorting algorithms. Hope you will enjoy while playing
with this tool.

# Sorting Algorithms

A sorting algorithm is a method for reorganizing a large number of items into a specific order, such as alphabetical, highest-to-lowest value or shortest-to-longest distance. Sorting algorithms take lists of items as input data, perform specific operations on those lists and deliver ordered arrays as output. 

## Classic Sorting Algorithms

* <b>Bubble Sort</b>:
Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.

* <b>Insertion Sort</b>:
The insertion sort algorithm starts by putting the first two items in order and then compares the third item with the second one, swapping positions if necessary and repeats that action with the first item. Subsequent items subjected to the same process often don't have to be moved far through the sorted items.

* <b>Selection Sort</b>:
Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.
The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.

* <b>Merge Sort</b>:
Merge sort is a sorting technique based on divide and conquer technique. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. There is a merge process which is used to merging two halves.

* <b>Quick Sort</b>:
Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value. 
Pivot value can be anything such as the first element, last element, middle element or random element from the array. Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays.

* <b>Heap Sort</b>:
Heap sort is a comparison based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for the remaining elements.
    * <b>Binary Heap</b>:
    A Binary Heap is a Complete Binary Tree where items are stored in a special order such that value in a parent node is greater(or smaller) than the values in its two children nodes. The former is called as max heap and the latter is called min-heap. The heap can be represented by a binary tree or array.

## Installation

If you want to run this locally, Fork this repository, Clone it and install the dependencies.
```
git clone https://github.com/<your username>/Sorting-Visualizer.git
cd Sorting-Visualizer
npm install
```
And, you are Good to Go!!!

This Project was inspired by <a href="https://github.com/clementmihailescu/">Clément Mihailescu's</a> Sorting Visualizer Tutorial Video that I watched on his YouTube Channel.
