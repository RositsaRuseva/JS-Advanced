function solve(num1, num2){
    while (num2 != 0){
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

