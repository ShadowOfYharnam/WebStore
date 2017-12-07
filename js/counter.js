var counter = 0;
var storage = "";

$(document).ready(function(){
	var fileName = "MOCK_DATA.json";
	
	$.getJSON(fileName, function(data){
		$("#products").empty(); 
		$.each(data, function(i, e){
			var $p = $("<p></p>");
			//make it print 3 per line
            if (counter == 3){
                $p.text(storage);
                $("#products").append($p);
                counter = 0;
                storage = "";
            }else{
                storage = storage + "   " + e.Name + " " + "$" + e.price + "  ";
                counter +=1 
            }
			
		});		
	});

    var selectBox1 = document.getElementById("selectBox1");
    var selectBox2 = document.getElementById("selectBox2");
    var selectBox3 = document.getElementById("selectBox3");

    //worked for the third box but not the first 2

    $.getJSON(fileName, function(data){ 
		$.each(data, function(i, e){
            var opt = document.createElement('option');
            opt.value = e.Name;
            opt.innerHTML = e.Name;

            selectBox1.add(opt);
            
    });		
	});
});
