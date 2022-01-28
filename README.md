## Tests

Describe:   Pizza()

Test: It will use the constructor to give the object the same properties as the constructor

Code:
      let userPizza = new Pizza("medium", "pineapple", "chicken", 0);
Expected Output:
      userPizza = {size: "medium", toppings: "pineapple", premium: "chicken", price: 0}

Describe:   adjustCost()

Test: It will modify the price based off of the size property of medium

Code:
      let userPizza = new Pizza("medium", "pineapple", "chicken", 0);
      userPizza.adjustCost();
Expected Output:
      userPizza = {size: "medium", toppings: "pineapple", premium: "chicken", price: 8}

Test: It will modify the price based off of the size property of large

Code:
      let userPizza = new Pizza("large", "pineapple", "chicken", 0);
      userPizza.adjustCost();
Expected Output:
      userPizza = {size: "large", toppings: "pineapple", premium: "chicken", price: 10}

Test: It will modify the price based off of the size property of x-large

Code:
      let userPizza = new Pizza("x-large", "pineapple", "chicken", 0);
      userPizza.adjustCost();
Expected Output:
      userPizza = {size: "x-large", toppings: "pineapple", premium: "chicken", price: 12}

Test: It will modify the price based off of the size property of small

Code:
      let userPizza = new Pizza("small", "pineapple", "chicken", 0);
      userPizza.adjustCost();
Expected Output:
      userPizza = {size: "small", toppings: "pineapple", premium: "chicken", price: 5}

Test: It will modify the price based off of the length of the toppings property

Code:
      let userPizza = new Pizza("small", ["pineapple", "onion"], "chicken", 0);
      userPizza.adjustCost();
Expected Output:
      userPizza = {size: "small", toppings: ["pineapple", "onion"], premium: "chicken", price: 7}

Test: It will modify the price based off of the length of the premium property

Code:
      let userPizza = new Pizza("small", ["pineapple", "onion"], ["chicken", "tofu"], 0);
      userPizza.adjustCost();
Expected Output:
      userPizza = {size: "small", toppings: ["pineapple", "onion"], premium: ["chicken", "tofu"], price: 11}
            
      