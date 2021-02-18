function largestNumber(){
    var args = Array.from(arguments)
    var max = args[0];
    for (var i = 1; i < args.length; i++){
        if (max<args[i]) {
            max = args[i];
        }
        
    }
    console.log(`The largest number is ${max}.`)
}
