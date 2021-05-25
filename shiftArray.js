let arr = [1,2,3,4,5,6,7]
let n = 3

console.log(shiftArrayToRight(arr,n))

function shiftArrayToRight(arr, places) {
    for (let i = 0; i < places; i++) {
        arr.unshift(arr.pop());
    }
    return arr
}