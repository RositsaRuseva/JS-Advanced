function solve(fruit, weight, price){
    
    let weightInKg = weight / 1000;
    let totalPrice = weightInKg * price;

    let finalWeight = weightInKg.toFixed(2);
    let finalPrice = totalPrice.toFixed(2);
    console.log(`I need $${finalPrice} to buy ${finalWeight} kilograms ${fruit}.`);
}

