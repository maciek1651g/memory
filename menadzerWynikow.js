class MenadzerWynikow
{
	static odczytWynikow()
	{
		var dane = MenadzerDanych.odczyt();
		if(dane!=NaN)
		{
			var tabela = "<table class='tabela'>"
			tabela += "<tr><th>ID</th><th>Nick</th><th>Tryb gry</th><th>Poziom Trudności</th><th>Czas</th></tr>"
			for(var i=0;i<dane.length;i++)
			{
				tabela += "<tr>"
				for(var j =0;j<dane[i].length;j++)
				{
					tabela += "<td>"+dane[i][j]+"</td>"
				}
				tabela += "</tr>"
			}
			tabela += "</table>"
			document.getElementById("poleGry").innerHTML = tabela;
		}
		else
		{
			alert("Błąd odczytu danych!")
		}
	}
	
	static zapis(nick,czas, tryb, trudnosc)
	{
		var tmp = MenadzerDanych.zapis(nick,czas, tryb, trudnosc)
		if(tmp)
		{
			alert("Zapisano dane!")
		}
		else
		{
			alert("Błąd zapisu danch!")
		}
	}
}

