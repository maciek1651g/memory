class MenadzerDanych
{
	static sciezkaDoObrazow = "./obrazy/"
	
	static pobierzObrazy(ile)
	{
		var xhttp = new XMLHttpRequest();
		var tabObrazow=NaN;
		if(ile!=NaN && ile>0)
		{
			xhttp.onreadystatechange = function() 
			{
				if (this.readyState == 4 && this.status == 200) 
				{
					tabObrazow = this.responseText;
				}
				else if(this.readyState == 4)
				{
					tabObrazow = NaN;
				}
			};
			
			xhttp.open("GET", "kontrolerObrazow.php?ile="+ile, false);
			xhttp.send();
		}
		
		try{
			tabObrazow = JSON.parse(tabObrazow);
		}catch{
			tabObrazow = NaN;
		}
		
		return tabObrazow
	}
	
	static zapis(nick,czas, tryb, trudnosc)
	{
		var xhttp = new XMLHttpRequest();
		var flaga = false
		if(isNaN(nick) && isNaN(tryb) && isNaN(trudnosc) && czas!=NaN && czas>0)
		{
			xhttp.onreadystatechange = function() 
			{
				if (this.readyState == 4 && this.status == 200) 
				{
					flaga = true
				}
				else if(this.readyState == 4)
				{
					flaga = false
				}
			};
			
			xhttp.open("GET", "kontrolerZapisu.php?nick="+nick+"&czas="+czas+"&tryb="+tryb+"&trudnosc="+trudnosc, false);
			xhttp.send();
		}
		return flaga
	}
	
	// static async odczyt() {
		// let response = await new Promise(resolve => {
		   // var xhr = new XMLHttpRequest();
		   // xhr.open("GET", "kontrolerOdczytu.php", true);
		   // xhr.onload = function(e) {
			 // resolve(xhr.response);
		   // };
		   // xhr.onerror = function () {
			 // resolve(undefined);
			 // console.error("** An error occurred during the XMLHttpRequest");
		   // };
		   // xhr.send();
		// }) 
		
		// JSON.parse(response);
	// }
	
	static odczyt()
	{
		var xhttp = new XMLHttpRequest();
		var tekst = ""
		
		xhttp.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				tekst = this.responseText;
			}
			else if(this.readyState == 4)
			{
				tekst = NaN
			}
		};
		
		xhttp.open("GET", "kontrolerOdczytu.php", false);
		xhttp.send();
		
		try{
			tekst = JSON.parse(tekst);
		}catch{
			tekst = NaN
		}
		
		return tekst
	}
}
