const quantity = 2;
const price = 50000;
function calculateTotalPrice() {
let total = quantity * price;
let result = total.toLocaleString("ru-RU", { style: "currency", currency: "RUB" });
//document.getElementById("text").innerHTML= 'Стоимость покупки: ' + result;
return result;
}
    

calculateTotalPrice();



