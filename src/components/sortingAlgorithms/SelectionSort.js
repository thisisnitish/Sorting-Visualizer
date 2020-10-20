
export function getSelectionSortAnimations(array){
    const animations = [];
    var min_idx;

    for(var i=0; i<array.length-1; i++){
        min_idx = i;

        for(var j = i+1; j < array.length; j++){
            if(array[j] < array[min_idx])
                min_idx = j;
        }
        // animations.push([min_idx, i, array[min_idx], array[i]]);
        // animations.push([min_idx, i, array[min_idx], array[i]]);
        swap(array, min_idx, i, animations);
    }
    return animations;
}

function swap(array, min_idx, i, animations){

  //to change the color
  animations.push([min_idx, i, array[min_idx], array[i]]);
  //to change the position
  animations.push([min_idx, i, array[min_idx], array[i]]);

  var temp = array[min_idx];
  array[min_idx] = array[i];
  array[i] = temp;
}
