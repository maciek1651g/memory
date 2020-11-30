class MenadzerGry
{
	static menago=0
	static licznik=0
	static blokada = true
	static czas = 0
	static stoper = 0
	static poprzedniObiekt = 0
	static poprzedniPara = 0
	
	constructor(typG, poziomT)
	{
		this.poziomTrudnosci = poziomT
		this.typGry = typG
		this.liczbaPar = 0
		
		if(poziomT==1)
			this.liczbaPar = 4
		if(poziomT==2)
			this.liczbaPar = 8
		if(poziomT==3)
			this.liczbaPar = 12
		if(this.typGry==1)
			this.obrazy = MenadzerGry.pobierzObrazy(this.liczbaPar,"MenadzerGryKlasycznej")
		else
			this.obrazy = MenadzerGry.pobierzObrazy(this.liczbaPar, "MenadzerGryLosowej")
		if(MenadzerGry.stoper!=0)
		{
			clearInterval(MenadzerGry.stoper)
		}
		MenadzerGry.czas=0
		MenadzerGry.startTime()
		MenadzerGry.stoper = setInterval(MenadzerGry.startTime,1000)
	}
	
	rozlozObrazy()
	{
		this.tasowanie(10)
		document.getElementById("poleGry").innerHTML =""
		this.obrazy.forEach(function(entry) {
			document.getElementById("poleGry").innerHTML += entry
		});
	}
	
	static startTime() 
	{
		MenadzerGry.czas++
		var m = MenadzerGry.checkTime(Math.floor(MenadzerGry.czas/60));
		var s = MenadzerGry.checkTime(Math.round(MenadzerGry.czas%60));
		document.getElementById('czas').innerHTML = m + ":" + s;
	}
	
	static checkTime(i) 
	{
		if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
		return i;
	}
	
	static stopGra()
	{
		clearInterval(MenadzerGry.stoper)
		MenadzerGry.poprzedniObiekt = 0
		MenadzerGry.poprzedniPara = 0
		MenadzerGry.licznik=0
		document.getElementById("poleGry").innerHTML = ""
		document.getElementById("start_stop").value = "Start"
		document.getElementById("start_stop").onclick = MenadzerGry.RozpocznijGre
	}
	
	tasowanie(ile)
	{
		for(var i=0;i<ile;i++)
		{
			for(var j =0;j<10;j++)
			{
				var x = Math.round(Math.random()*100)%this.obrazy.length
				var y = Math.round(Math.random()*100)%this.obrazy.length
				
				if(x!=y)
				{
					var tmp = this.obrazy[x];
					this.obrazy[x]=this.obrazy[y]
					this.obrazy[y]=tmp
				}
			}
		}
	}
	
	 static pobierzObrazy(ile, klasaGry)
	{
		var tmp = MenadzerDanych.pobierzObrazy(ile)
		var wynik = new Array()
		
		var len = tmp.length
		var mem = 1
		for(var i=0;i<len;i++)
		{
			wynik.push("<div class='pojemniczek' onclick='"+klasaGry+".klikniecieWDiva(this)' data-para='p"+(i+1)+"' id='m"+mem+"'><div class='ukryte'><img class='memor' src='"+tmp[i]+"' alt='Brak obrazu' /></div></div>")
			mem++
			wynik.push("<div class='pojemniczek' onclick='"+klasaGry+".klikniecieWDiva(this)' data-para='p"+(i+1)+"' id='m"+mem+"'><div class='ukryte'><img class='memor' src='"+tmp[i]+"' alt='Brak obrazu' /></div></div>")
			mem++
		}
		
		return wynik
	}
	
	static wygrana()
	{
		if (confirm("Wygrałeś!\nChcesz zapisać swój wynik?\nCzas: "+MenadzerGry.czas)) 
		{
			var nick = prompt("Wprowadź swój pseudonim.");
			MenadzerGry.zapis(nick)
		}
	}
	
	static zapis(nick)
	{
		if (nick != null || nick != "") 
		{
			var tryb = ""
			var trudnosc = ""
			if(MenadzerGry.menago.typGry==1)
			{
				tryb = "Gra klasyczna"
			}
			else
			{
				tryb = "Gra na czas"
			}
			
			if(MenadzerGry.menago.poziomTrudnosci==1)
			{
				trudnosc = "Łatwy"
			}
			else
			{
				if(MenadzerGry.menago.poziomTrudnosci==2)
				{
					trudnosc = "Średni"
				}
				else
				{
					trudnosc = "Trudny"
				}
			}
			
			MenadzerWynikow.zapis(nick, MenadzerGry.czas, tryb, trudnosc)
		}
	}
	
	
	
	static RozpocznijGre()
	{
		var x = document.getElementById("graKlasyczna").checked;
		if(x===true)
		{
			//console.log("Gra klasyczna")
			x = 1
		}
		else
		{
			//console.log("Gra w losowanie")
			x=2
		}
		
		var y = document.getElementById("latwy").checked;
		
		if(y==true)
		{
			//console.log("Łatwy")
			y=1
		}
		else
		{
			y = document.getElementById("sredni").checked;
			if(y==true)
			{
				//console.log("Średni")
				y=2
			}
			else
			{
				//console.log("Trudny")
				y=3
			}
		}
		
		document.getElementById("start_stop").value = "Stop"
		document.getElementById("start_stop").onclick = MenadzerGry.stopGra
		
		MenadzerGry.menago = new MenadzerGry(x,y)
		MenadzerGry.menago.rozlozObrazy()
		if(x==2)
			MenadzerGryLosowej.startGra()
	}
}





