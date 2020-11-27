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
		
		tabObrazow = JSON.parse(tabObrazow);
		
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
		
		tekst = JSON.parse(tekst);
		return tekst
	}
}

