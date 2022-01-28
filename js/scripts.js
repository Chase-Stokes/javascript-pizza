function Pizza(size, toppings, premium) {
  this.size = size;
  this.toppings = toppings;
  this.premium = premium;
  this.price = 0;
};

Pizza.prototype.adjustCost = function () {
  let pizzaToppings = this.toppings.length *2;
  if (this.size === "medium") {
    this.price += (8 + pizzaToppings);
  } else if (this.size === "large") {
    this.price += (10 + pizzaToppings);
  } else if (this.size === "x-large") {
    this.price += (12 + pizzaToppings);
  } else {
    this.price += (5 + pizzaToppings);
  }
};