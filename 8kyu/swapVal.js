// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?



//Solution

function swapValues(array) {
    if (Array.isArray(array) && array.length >= 2) {
        var temp = array[0];
        array[0] = array[1];
        array[1] = temp;
    }
}