function aggregateElements(elements){
    let sum = 0;
    let sum1 = 0;
    let concatResult = '';

    for (var i = 0; i < elements.length; i++){
        const currentElement = elements[i];
        sum += currentElement;
        sum1 += 1/currentElement;
        concatResult += currentElement;
    }
    console.log(sum);
    console.log(sum1);
    console.log(concatResult);
}
