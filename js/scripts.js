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