var crustCost = [5.00, 5.50, 6.00];
var sizeCost = [1.00, 2.00, 3.00];
var toppingCost = [1.25, 1.00, 0.50, 1.50, 2.00, 1.50, 1.00, 1.00, 1.50, 1.00];
var toppingName = ["Pepperoni", "Mushrooms","Onions","Sausage","Bacon","Extra Cheese", "Black Olives", "Green Peppers", "Pineapple", "Spinach"];

function Pizza(crust, size, toppings){
  this.crust = crust;
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.toppingsCost = function(){
  var total = 0;

  .forEach(function(topping){
    pizzaCost += parseInt(topping);
  });
  return total;
}
