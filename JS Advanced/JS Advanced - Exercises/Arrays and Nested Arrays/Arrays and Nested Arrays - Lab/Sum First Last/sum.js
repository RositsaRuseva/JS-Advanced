function firstLast(inputString){
    let first = Number(inputString.shift());
    let last = Number(inputString.pop());

    return first + last;
}
