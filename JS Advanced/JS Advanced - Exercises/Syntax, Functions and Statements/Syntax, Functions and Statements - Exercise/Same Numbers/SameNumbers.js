function sameNumbers(number){
    var i;
    var isSame = true;
    var sum = 0;
    const numAsText = number.toString();
    for (i = 0; i < numAsText.length; i++) {
        
        if (i < numAsText.length - 1){
            if (numAsText[i] != numAsText[i+1]){
                isSame = false;
            }
        }
        sum+= Number(numAsText[i]);
        
    }
    console.log(isSame);
    console.log(sum);
}
