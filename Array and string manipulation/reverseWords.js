

function reverseWotds(arrayOfWords){
     reverse(arrayOfWords,0,arrayOfWords.length - 1);


    let indexOfCurrentWord=0;



    for (let i = 0; i <= arrayOfWords.length; i++) {

  

        if (i === ' ' || i === arrayOfWords.length) {
            
            reverse()
        }


        
    }













function reverse(arrayOfChars,leftIndex,rightIndex){
    while (leftIndex < rightIndex) {
        const temp = arrayOfChars[leftIndex];
        arrayOfChars[leftIndex]=arrayOfChars[rightIndex];
        arrayOfChars[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}









}

