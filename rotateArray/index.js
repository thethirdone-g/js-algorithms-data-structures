// Problem Domain :

// Given an array, rotate the array to the right by k steps, where k is non-negative.


// Example :

// Input - nums = [1,2,3,4,5,6,7], k = 3
// Output - [5,6,7,1,2,3,4]
// Explanation - 
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


// Algorithm :

// - Determine the amount of steps to rotate by finding of the remainder of steps from the length of the array to k.
// - Reverse the entire array
// - Reverse the amount of elements that is the amount of steps
// - Reverse the rest of the elements
// - Write out reverse function


// CODE :

function rotateArray(arr, steps) {
    steps = steps % arr.length;

    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, steps - 1);
    reverse(arr, steps, arr.length -1);
};

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[0];
        arr[end] = arr[start];
        arr[start] = temp;
        start++;
        end--;
    }
};