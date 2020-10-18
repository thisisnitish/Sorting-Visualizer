
export function getInsertionSortAnimations(array){
    const animations = [];
    for(var i=0; i<array.length; i++){
        let value = array[i];

        for(var j=i-1; j>=0 && value < array[j]; j--){
          //to change the color
          animations.push([j, j + 1, array[j], array[j + 1]]);
          //to change the position
          animations.push([j, j + 1, array[j], array[j + 1]]);

          array[j+1] = array[j];
        }
        array[j+1] = value;
    }
    return animations;
}
