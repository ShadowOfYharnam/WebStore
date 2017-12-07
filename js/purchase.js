//contains the functions for the forms
var totalPrice = 0;
function addToOrder() {
    var selected = document.getElementById("selectBox1").value;
    var $p = $("<p></p>");
    var $totalPrice = $("<p></p>"); 
    var price = 0;
    var fileName = "MOCK_DATA.json";
    //adds the price and name to a div below the button s well as total price math
	$.getJSON(fileName, function(data){ 
		$.each(data, function(i, e){
			if(e.Name == selected){
                price = e.price; 
                totalPrice += price;
                $p.text(selected + "  " +  "$" + price);
            }
		});		
	});
    $totalPrice.text("$" + totalPrice.toFixed(2));
    $("#purchaseList").append($p);

    //clears current total and updates the number
    $("#total").empty();
    $("#total").append($totalPrice);
}
    
function submitPurchase(){
document.getElementById("purchase-confirmation").innerHTML=localStorage.purchaseDivs;
    $("#purchaseDivs").text(" Thank you for Your purchase. Your total was: " + totalPrice);
    //should change the window after the new things are in place
    window.location.replace("https://shadowofyharnam.github.io/WebStore/index.html");
}