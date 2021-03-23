function solve(matrix){
    let maxNumber = matrix
    .map(row => Math.max(...row))
    .reduce((a,x)=> {return Math.max(a, x)}, Number.MIN_SAFE_INTEGER);
    
    return maxNumber;
    
}
