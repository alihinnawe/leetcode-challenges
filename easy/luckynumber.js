/*
* @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let freq = {};

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let result = -1;

    for (let num in freq) {
        let val = parseInt(num);
        if (freq[num] === val) {
            result = Math.max(result, val);
        }
    }

    return result;
};