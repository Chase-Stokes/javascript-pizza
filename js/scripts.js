function Pizza(size, toppings, premium) {
  this.size = size;
  this.toppings = toppings;
  this.premium = premium;
  this.price = 0;
};

Pizza.prototype.adjustCost = function () {
  let pizzaToppings = this.toppings.length *1;
  let premiumToppings = this.premium.length *2;
  if (this.size === "medium") {
    this.price += (8 + pizzaToppings + premiumToppings);
  } else if (this.size === "large") {
    this.price += (10 + pizzaToppings + premiumToppings);
  } else if (this.size === "x-large") {
    this.price += (12 + pizzaToppings + premiumToppings);
  } else {
    this.price += (5 + pizzaToppings + premiumToppings);
  }
};

function addToCart(pizza) {
  $("").text(pizza.size)
  $("").text(pizza.toppings)
  $("").text(pizza.premium)
  $("").text(pizza.price)
}

$(document).ready(function(){
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    let pSize = $("#size").val();
    let topArray = [];
    let premArray = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      topArray.push($(this).val());
    });
    $("input:checkbox[name=premium]:checked").each(function(){
      premArray.push($(this).val());
    });
    let pizza = new Pizza(pSize, topArray, premArray);
    pizza.adjustCost();
    addToCart(pizza)
  });
});