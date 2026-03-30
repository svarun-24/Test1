// Largest Number in an Array
function findLargest(nums) {
    var largest = nums[0];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var arr = nums_1[_i];
        if (arr > largest) {
            largest = arr;
        }
    }
    return largest;
}
console.log(findLargest([10, 5, 25]));
