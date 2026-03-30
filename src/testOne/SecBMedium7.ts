// Remove Duplicates

function removeDuplicates(arr: number[])
{
    let duplicate: number[] = [];

    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]! == arr[j])
            {
               duplicate.push(arr[i]);
               break;
            }
        }
    }

    console.log(duplicate);
}

removeDuplicates([1,2,2,3,3]);
