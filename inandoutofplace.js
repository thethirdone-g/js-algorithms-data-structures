function  squareArrayInPlace(intArray) {
    intArray.forEach((int, index) => {
        intArray[index] *= int;
    });

    // There's no need to return anything because you modified the intArray in-place
}

// Beware of how in-place algorithms affect your code outside of the function :

const originalArray = [2, 3, 4, 5];

squareArrayInPlace(originalArray);

console.log('original array : ' + originalArray);

// Logs : original array : 4, 9, 16, 25