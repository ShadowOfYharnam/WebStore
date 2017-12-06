//contains the functions for the forms

function addToOrder() {
    var selected = document.getElementById("selectBox1").value;
    var $p = $("<p></p>"); 
    var price = 10;
    var fileName = "MOCK_DATA.json";
    //adds the price and name to a div below the button
	$.getJSON(fileName, function(data){ 
		$.each(data, function(i, e){
			if(e.Name == selected){
                price = e.price; 
                $p.text(selected + " " + price);
         }
		});		
	});
    $("#purchaseList").append($p);

}

function submitPurchase(){

}