const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]


function mergedArrays(myArray,alicesArray){

    const mergedArray = [];
    let myCurrentIndex=0;
    let aliceCurrentIndex=0;
    let mergeCurrentIndex=0;


    while (mergeCurrentIndex<(myArray.length+alicesArray.length)) {

     
        const isMyArrayExhausted = myCurrentIndex>=myArray.length;
        const isAliceArrayExhausted = aliceCurrentIndex>=alicesArray.length;

        if (!isMyArrayExhausted && (isAliceArrayExhausted || (myArray[myCurrentIndex]<alicesArray[aliceCurrentIndex])  )) {
            mergedArray[mergeCurrentIndex]=myArray[myCurrentIndex];
            myCurrentIndex++;
        } else {
            mergedArray[mergeCurrentIndex]=alicesArray[aliceCurrentIndex];
            aliceCurrentIndex++;
        }

        mergeCurrentIndex++;


        
    }
    
    
    return mergedArray

}