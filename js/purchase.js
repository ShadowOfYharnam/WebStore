//contains the functions for the forms
var totalPrice = 0;
function addToOrder() {
    var selected = document.getElementById("selectBox1").value;
    var $p = $("<p></p>"); 
    var price = 0;
    var fileName = "MOCK_DATA.json";
    //adds the price and name to a div below the button
	$.getJSON(fileName, function(data){ 
		$.each(data, function(i, e){
			if(e.Name == selected){
                price = e.price; 
                totalPrice = totalPrice + price;
                $p.text(selected + " " + price + totalPrice);
            }
		});		
	});
    $("#purchaseList").append($p);

}

function submitPurchase(){



    //should change the window after the new things are in place
    window.location.replace("https://shadowofyharnam.github.io/WebStore/index.html");
}