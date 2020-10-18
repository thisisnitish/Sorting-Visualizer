
export function getQuickSortAnimations(array, left, right){
    const animations = [];
    var index;      //partitioning index

    if(array.length > 1){
        index = partition(array, left, right, animations);

        if(left < index - 1)
            getQuickSortAnimations(array, left, index - 1);

        if(index < right)
            getQuickSortAnimations(array, index, right);
    }
    return animations;
}

function partition(array, left, right, animations){
    var pivot = array[Math.floor((right + left)/2)];    //Taking middle element as pivot element anyone can be taken your wish

    //basically using two pointer method
    var i = left;   //left pointer
    var j = right;  //right pointer

    while(i <= j){
        //increasing the right pointer
        while(array[i] < pivot)
            i++;
        
        //decreasing the left pointer
        while(array[j] > pivot)
            j--;
            
        if(i <= j){
            swap(array, i, j, animations);     //swap both the elements
            i++;
            j--;
        }
    }
    return i;
}

function swap(array, leftIdx, rightIdx, animations){
    
    //to change the color
    animations.push([leftIdx, rightIdx, array[leftIdx], array[rightIdx]]);
    //to change the position
    animations.push([leftIdx, rightIdx, array[leftIdx], array[rightIdx]]);
    var temp = array[leftIdx];
    array[leftIdx] = array[rightIdx];
    array[rightIdx] = temp;
}
