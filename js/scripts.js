function Pizza(girth, toppings) {
  this.girth = girth;
  this.toppings = toppings;
  this.totalCost;
}

Pizza.prototype.totalCost = function() {
  var base = 0;
  var cost = 0;
  var toppingCost = 0;

  if (this.girth === "small") {
    base = 10;
  } else if (this.girth === "medium") {
    base = 15;
  } else if (this.girth === "large") {
    base = 20;
  }
  toppingCost = (this.toppings * .5 );
  cost = base + toppingCost;
  this.totalCost = cost;
  return cost;
};
// END OF BUSINESS LOGIC

$(document).ready(function() {
  $("form#pizzaPlaceOrder").submit(function(event) {
    event.preventDefault();
// gather input from size selection
    var size = $("select#pizzaSizeSelected").val();
// gather input from number of toppings selected
    var toppingsPrice = ($("input:checkbox:checked").length);
// create new pizza object and store new values
    var newPizza = new Pizza(size, toppingsPrice);
// use the method constructor to calculate cost
    finalPrice = newPizza.totalCost();
    console.log(finalPrice);
    $("p#results").html("<p>" + "$" + finalPrice + "</p>");
  });
});
