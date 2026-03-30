// Remove Duplicates
function removeDuplicates1(arr) {
    var duplicate = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                duplicate.push(arr[i]);
                break;
            }
        }
    }
    console.log(duplicate);
}
removeDuplicates1([1, 2, 2, 3, 3]);
