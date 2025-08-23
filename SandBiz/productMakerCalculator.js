

function calculator(index){
var productPricing = document.getElementById("productPricing"+index);
var plus = document.getElementById("plus"+index);
var quantity = document.getElementById("quantity"+index);
var price =  document.getElementById("price"+index);
var minus = document.getElementById("minus"+index);
var counter = 1;
plus.addEventListener("click",e=>{
 
    counter= counter+1;
    quantity.value = counter;
    calculatePrice(counter);
});

minus.addEventListener("click",e=>{
    if( counter >0){
        counter= counter-1;
        quantity.value = counter;
        calculatePrice(counter);
    }
    
})

function calculatePrice(counterQuantity){
    var mainPrice =price.getAttribute("data")*1;

   var result = mainPrice * counterQuantity;

   console.log(mainPrice)
    price.innerText = result;
}



}