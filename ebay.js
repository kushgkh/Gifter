
function eBay(){
	 document.getElementById("results-id").style.display="block";
	var search = "";
	
	
	var val = Math.round(Math.random() * 4);
	if(document.getElementById("cat1").checked)
		{
			
			if(val==0)
			{
				search = "Electronics";
			}
			else if(val ==1)
			{
				search = "smartphone";
			}
			else if(val ==2)
			{
				
				search = "mouse";
			}
			else if(val ==3)
			{
				search = "headphone";
			}
			else if(val ==4)
			{
				search = "kindle";
			}
			
		}
		if(document.getElementById("cat2").checked)
		{
			if(val==0)
			{
				search = "Camping";
			}
			else if(val ==1)
			{
				search = "Outdoors";
			}
			else if(val ==2)
			{
				
				search = "Sports";
			}
			else if(val ==3)
			{
				search = "Football";
			}
			else if(val ==4)
			{
				search = "Soccer";
			}
		}
		if(document.getElementById("cat3").checked)
		{
           if(val==0)
			{
				search = "Color";
			}
			else if(val ==1)
			{
				search = "Arts";
			}
			else if(val ==2)
			{
				
				search = "Painting";
			}
			else if(val ==3)
			{
				search = "Sewing";
			}
			else if(val ==4)
			{
				search = "Knitting";
			}
		}
		if(document.getElementById("cat4").checked)
		{
			if(val==0)
			{
				search = "Spoons";
			}
			else if(val ==1)
			{
				search = "Google_Home";
			}
			else if(val ==2)
			{
				
				search = "Amazon_Echo";
			}
			else if(val ==3)
			{
				search = "Home";
			}
			else if(val ==4)
			{
				search = "Phillips_Hue";
			}
		}
		if(document.getElementById("cat5").checked)
		{
			if(val==0)
			{
				search = "Stuffed_Animal";
			}
			else if(val ==1)
			{
				search = "Toys";
			}
			else if(val ==2)
			{
				
				search = "Games";
			}
			else if(val ==3)
			{
				search = "Puzzle";
			}
			else if(val ==4)
			{
				search = "Board_Game";
			}
		}
		//alert(search);
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=KushKhan-Shox-PRD-78ad1601a-52419ebc&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords=" + search + "&paginationInput.entriesPerPage=6&GLOBAL-ID=EBAY-US&siteid=0", false);
	xhr.send();

	var t = (xhr.responseText);

	//var test = JSON.parse(xhr.response);

	//console.log(xmlDoc);
	//console.log(xhr.responseText);
	var loc1;
	var loc2;
	var found = false;
	while(t.indexOf("\"title\"") != -1 && !found)
	{
		loc1 = t.indexOf("\"title\"");
		loc2 = t.indexOf("\"globalId\"");
		
		var name = t.substring(loc1+10 , loc2-3);
		
		loc1 = t.indexOf("\"galleryURL\"");
		loc2 = t.indexOf("\"viewItemURL\"");
		
		var img = t.substring(loc1+15 , loc2-3);
		img = img.trim();
		
		loc1 = t.indexOf("\"viewItemURL\"");
		loc2 = t.indexOf("\"paymentMethod\"");
		var url = t.substring(loc1+16 , loc2-3);
		url = url.trim();
		
		loc1 = t.indexOf("\"currentPrice\"");
		t=t.substring(loc1);
		
		loc1 = t.indexOf("\"__value__\"");
		loc2 = t.indexOf("}]");
		
		var price = t.substring(loc1+13 , loc2-1);
		price = price.trim();
	
		console.log(Math.round(price));
		if(Math.round(price)>= document.getElementById("low").value && Math.round(price) <= document.getElementById("high").value)
		{
			found = true;
			//console.log("Price: "+price + "     " );
			document.getElementById("title").innerHTML = name;
			document.getElementById("prodPic").src = img;
			//console.log(img);
				document.getElementById("prodPic").style.display="inline";
				document.getElementById("cost").innerHTML= "Cost: $" + price;
				document.getElementById("productLink").href=url;
		}
		
		
		
		
		
		
		//document.writeln(name);
		//document.writeln(img);
		
		
		
		//console.log(t.substring(loc1+10 , loc2-3));
		t = t.substring(loc2+12);
	
	
	
	
	
	}
	
}







