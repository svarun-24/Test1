// Second Largest Number

function secondLargest1(nums: number[]): number
{
    let FirLargest = nums[0];
    let secLargest = nums[0];

    for(let arr of nums)
    {
        if(arr> FirLargest)
        {
            secLargest=FirLargest;
            FirLargest=arr;
        }
        if(arr> secLargest && arr!= FirLargest)
        {
            secLargest=arr;
        }
    }

    return secLargest;
}

console.log(secondLargest1([10,20,5]));
