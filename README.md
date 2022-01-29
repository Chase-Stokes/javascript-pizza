# _JavaScript Pizza_

#### By _**Chase Stokes**_

#### _{An Epicodus project making a pizza website}_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JQuery_
* _Google Fonts_

## Description

_A project making use of constructors and loops to display the property values of a pizza object._

## Setup/Installation Requirements

* _Clone the project from [github.com/chase-stokes/javascript-pizza]_
* _open the project in a text editor of your choice_
* _open the html by right clicking the html in your text-editor and click open live server to monitor changes in your preferred browser_
* _enjoy your pizza!_

## Known Bugs

* _No Known Bugs_

## License

_MIT_

Copyright (c) _01/28/2022_ _Chase Stokes_
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
            
      