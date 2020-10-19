
export function getBubbleSortAnimations(array){
    const animations = [];
    if(array.length <= 1) return array;

    const auxiliaryArray = array.slice();
    let len = auxiliaryArray.length;
    for(let i=0; i<len-1; i++){
        for(let j=0; j<len-i-1; j++){
            if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
              //to change the color
              animations.push([
                j,
                j + 1,
                auxiliaryArray[j],
                auxiliaryArray[j + 1],
              ]);
              //to change the position
              animations.push([
                j,
                j + 1,
                auxiliaryArray[j],
                auxiliaryArray[j + 1],
              ]);

              let temp = auxiliaryArray[j];
              auxiliaryArray[j] = auxiliaryArray[j + 1];
              auxiliaryArray[j + 1] = temp;
            }
        }
    }
    return animations;
}
