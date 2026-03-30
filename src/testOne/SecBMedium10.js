// Second Largest Number
function secondLargest(nums) {
    var FirLargest = nums[0];
    var secLargest = nums[0];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var arr = nums_1[_i];
        if (arr > FirLargest) {
            secLargest = FirLargest;
            FirLargest = arr;
        }
        if (arr > secLargest && arr != FirLargest) {
            secLargest = arr;
        }
    }
    return secLargest;
}
console.log(secondLargest([10, 20, 5]));
