//contains the functions for the forms
var totalPrice = 0;
var selected;
 var price = 0;

function addToOrder() {
    var $p = $("<p></p>");
    var $totalPrice = $("<p></p>"); 
    var fileName = "MOCK_DATA.json";
    selected = document.getElementById("selectBox1").value;
    //adds the price and name to a div below the button s well as total price math
    var data = $.getJSON(fileName);
    getPrice(data);
    $p.text(selected + "  " +  "$" + price);

	//$.getJSON(fileName, function(data){ 
	//	$.each(data, function(i, e){
	//		if(e.Name == selected){
    //            price = e.price; 
    //            totalPrice += price;
    //            $p.text(selected + "  " +  "$" + price);
    //        }
	//	});		
	//});
    //prints the total price and the name and price of a item
    $totalPrice.text("$" + totalPrice.toFixed(2));
    $("#purchaseList").append($p);

    //clears current total and updates the number
    $("#total").empty();
    $("#total").append($totalPrice);
}

function getPrice(data) {
    	$.each(data, function(i, e){
			if(e.Name == selected){
                price = e.price; 
                totalPrice += price;
             }
        });
}
    
function submitPurchase(){
    //alerts the total and a thank you for now till the page switching works correctly.
    window.location.replace("https://shadowofyharnam.github.io/WebStore/index.html");
    alert(" Thank you for Your purchase. Your total was: $" + totalPrice);
}