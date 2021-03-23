function solve(arr, startString, endString){
    let result =[];
    let startIndex = arr.indexOf(startString);
    let endIndex = arr.indexOf(endString);
    for (let i = startIndex; i <= endIndex; i++)
    {
        result.push(arr[i]);
    }
    return result;
}
