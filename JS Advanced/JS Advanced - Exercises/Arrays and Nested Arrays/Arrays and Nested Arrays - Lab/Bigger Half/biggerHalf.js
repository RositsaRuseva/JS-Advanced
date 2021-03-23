function biggerHalf(numbers){
    return numbers.sort((a, b)=> a -b)
    .slice(numbers.length / 2);
}
