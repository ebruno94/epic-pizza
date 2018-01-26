var crustCost = [5.00, 5.50, 6.00];
var sizeCost = [1.00, 2.00, 3.00];
var toppingCost = [1.25, 1.00, 0.50, 1.50, 2.00, 1.50, 1.00, 1.00, 1.50, 1.00];
var crustName = ['Thin Crust', 'Brooklyn Style', 'Handmade Pan Pizza Crust']
var sizeName = ['Small (12")', 'Medium (14")', 'Large (14")']
var toppingName = ["Pepperoni", " Mushrooms"," Onions"," Sausage"," Bacon"," Extra Cheese", " Black Olives", " Green Peppers", " Pineapple", " Spinach"];

function Pizza(indexCrust, indexSize, indexToppings, toppings){
  this.crust = crustName[indexCrust];
  this.size = sizeName[indexSize];
  this.toppings = toppings;
  this.iCrust = indexCrust;
  this.iSize = indexSize;
  this.iToppings = indexToppings;
};

Pizza.prototype.pizzaCost = function(){
  var toppingTotal = 0;
  (this.iToppings).forEach(function(toppingIndex){
    toppingTotal += toppingCost[toppingIndex];
  })
  return toppingTotal + crustCost[this.iCrust] + sizeCost[this.iSize]
};


$(document).ready(function(){
  var pizzaNum = 0;
  var indexCrust = 0;
  var indexSize = 0;
  var indexToppings = [];
  var totalCost = 0;

  $("#creationForm").submit(function(event){
    event.preventDefault();
    pizzaNum += 1;
    indexCrust = parseInt($("input:radio[name=typeCrust]:checked").val());
    indexSize = parseInt($("input:radio[name=sizeCrust]:checked").val());
    var tempNameTops = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var tempTopping = parseInt($(this).val());
      indexToppings.push(tempTopping);
    });
    indexToppings.forEach(function(index){
      tempNameTops.push(toppingName[index]);
    })
    var newPizza = new Pizza(indexCrust, indexSize, indexToppings, tempNameTops);
    $("ul#pizzaList").append("<li><span class='pizza'>"+ "Pizza #"+ pizzaNum + "</span></li>");
    $(".pizza").last().click(function(){
      $("#showInfo").slideToggle("ease");
      $("#crustDisplay").text(newPizza.crust);
      $("#sizeDisplay").text(newPizza.size);
      $("#toppingsDisplay").text(newPizza.toppings);
    });
    totalCost += newPizza.pizzaCost();
    var tax = totalCost * 0.15;
    $("#taxDisplay").text((Math.round(tax * 100) /100).toFixed(2))
    $("#costDisplay").text((Math.round((totalCost + tax) * 100) /100).toFixed(2));
  });
  $("#orderMore").click(function(){
    $("#creationForm").trigger("reset");
    $("#creationForm").find("input").removeAttr("checked");
    indexToppings = [];
  })
});
