function even(arr){
    let result =[];
    for(let i = 0; i< arr.length; i++)
    {
        if(i % 2 === 0){
        result.push(arr[i]);
        }
    }
    return result.join(" ");
}
