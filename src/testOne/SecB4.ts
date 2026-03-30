// Largest Number in an Array

function findLargest(nums: number[]): number
{
    let largest = nums[0];

    for(let arr of nums)
    {
        if(arr>largest)
        {
            largest=arr;
        }
    }
    return largest;
}

console.log(findLargest([10,5,25]));