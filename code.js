function getItem(){
    document.getElementById("results-id").style.display="block";
   // document.write(db[0].Name);
	   // document.write(db[0].Cost);
		//    document.write(db[0].Category);
		var found = false;
		var filters = ["","","","" , ""];
		if(document.getElementById("cat1").checked)
		{
			filters[0] = "Electronics";
		}
		if(document.getElementById("cat2").checked)
		{
			filters[1] = "Outdoors";
		}
		if(document.getElementById("cat3").checked)
		{
			filters[2] = "Arts";
		}
		if(document.getElementById("cat4").checked)
		{
			filters[3] = "Home";
		}
		if(document.getElementById("cat5").checked)
		{
			filters[4] = "Toys";
		}
		
	
		
		
		
		
		
		
		var loop = 0;
		while(!found)
		{
			var i = Math.floor(Math.random() * db.length);	
			loop++;
			
			if(db[i].Cost >= document.getElementById("low").value && db[i].Cost <= document.getElementById("high").value )
			{
			
				for(var k = 0 ; k < filters.length ; k++)
				{
					
					if(filters[k] == db[i].Category)
					{
						document.getElementById("title").innerHTML=db[i].Name;
						document.getElementById("prodPic").src=db[i].PicURL;
						document.getElementById("prodPic").style.display="inline";
						document.getElementById("cost").innerHTML= "Cost: $" + db[i].Cost;
						found = true;
					}
				}
				
			}
			if(loop > 100)
			{
			break;
			}				
			
			
		}
		
}