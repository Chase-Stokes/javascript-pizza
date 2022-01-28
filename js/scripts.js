function Pizza(size, toppings, premium) {
  this.size = size;
  this.toppings = toppings;
  this.premium = premium;
  this.price = 0;
};

Pizza.prototype.adjustCost = function () {
  if (this.size === "medium") {
    this.price += 8;
  } else if (this.size === "large") {
    this.price += 10;
  } else if (this.size === "x-large") {
    this.price += 12;
  }
};