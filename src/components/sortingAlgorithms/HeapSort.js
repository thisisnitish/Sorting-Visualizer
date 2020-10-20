
export function getHeapSortAnimations(array){
  const animations = [];
  var length = array.length;

  //Building heap
  for (var i = Math.floor(length / 2); i >= 0; i--) {
    heapify(array, i, length, animations);
  }

  // One by one extract an element from heap
  for(i = array.length - 1; i > 0; i--){
      swap(array, 0, i, animations);
      length--;
      heapify(array, 0, length, animations);
  }
  return animations;
}

function heapify(array, i, length, animations){
  var max = i;
  var left = 2 * i + 1;
  var right = 2 * i + 2;

  // If left child is larger than root
  if (left < length && array[left] > array[max]) {
    max = left;
  }

  // If right child is larger than max so far
  if (right < length && array[right] > array[max]) {
    max = right;
  }

  // If max is not root
  if(max !== i){

    swap(array, i, max, animations);

    // Recursively heapify the affected sub-tree
    heapify(array, max, length, animations);
  }
}

function swap(array, idxA, idxB, animations){

    //to change the color
    animations.push([idxA, idxB, array[idxA], array[idxB]]);
    //to change the position
    animations.push([idxA, idxB, array[idxA], array[idxB]]);
    var temp = array[idxA];
    array[idxA] = array[idxB];
    array[idxB] = temp;
    return animations;
}
