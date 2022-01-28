## Tests

Describe:   Pizza()

Test: It will use the constructor to give the object the same properties as the constructor

Code:
      let userPizza = new Pizza("medium", "pineapple", "chicken", 0);
Expected Output:
      userPizza = {size: "medium", toppings: "pineapple", premium: "chicken", price: 0}

Describe:   adjustCost()

Test: It will modify the price based off of the size property

Code:
      let userPizza = new Pizza("medium", "pineapple", "chicken", 0);
      userPizza.adjustCost();
Expected Output:
      userPizza = {size: "medium", toppings: "pineapple", premium: "chicken", price: 8}
            
      