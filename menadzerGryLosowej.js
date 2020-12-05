class MenadzerGryLosowej
{
	static losowanko=0
	static tab=0
	static poprzedni=0
	
	static startGra()
	{
		MenadzerGryLosowej.tab = new Array()
		
		for(var i =1;i<=MenadzerGry.menago.obrazy.length;i++)
		{
			MenadzerGryLosowej.tab.push("m"+i)
		}
		
		MenadzerGryLosowej.wybierzLosowyObraz()
	}
	
	static wybierzLosowyObraz()
	{
		//MenadzerGry.blokada = false
		
		
		var losowa=0
		do
		{
			losowa = Math.round(Math.random()*100)%MenadzerGryLosowej.tab.length
		}
		while(losowa==MenadzerGryLosowej.poprzedni);
		
		MenadzerGryLosowej.poprzedni = losowa
		MenadzerGry.blokada=true
		MenadzerGryLosowej.klikniecieWDiva(document.getElementById(MenadzerGryLosowej.tab[losowa]))
		//MenadzerGryLosowej.tab.splice(losowa,1)
	}
	
	static klikniecieWDiva(element)
	{
		
		if(element!=null && element.children[0].style.visibility != "visible" && MenadzerGry.blokada)
		{
			element.children[0].style.visibility = "visible"
			var para = element.attributes[2].value
			if(MenadzerGry.poprzedniPara!=0)
			{
				MenadzerGry.blokada = false
				if(MenadzerGry.poprzedniPara==para)
				{
					MenadzerGry.licznik++
					MenadzerGry.poprzedniObiekt.onclick=""
					element.onclick=""
					if(MenadzerGry.licznik==MenadzerGry.menago.liczbaPar)
					{
						clearInterval(MenadzerGry.stoper)
						setTimeout(MenadzerGry.wygrana , 20);
						document.getElementById("start_stop").value = "Start"
						document.getElementById("start_stop").onclick = MenadzerGry.RozpocznijGre
						MenadzerGry.licznik=0
					}

					for(var i=0;i<MenadzerGryLosowej.tab.length;i++)
					{
						if(MenadzerGryLosowej.tab[i]==element.id || MenadzerGryLosowej.tab[i]==MenadzerGry.poprzedniObiekt.id)
						{
							MenadzerGryLosowej.tab.splice(i,1)
						}
					}
					for(var i=0;i<MenadzerGryLosowej.tab.length;i++)
					{
						if(MenadzerGryLosowej.tab[i]==element.id || MenadzerGryLosowej.tab[i]==MenadzerGry.poprzedniObiekt.id)
						{
							MenadzerGryLosowej.tab.splice(i,1)
						}
					}
					
					MenadzerGry.poprzedniObiekt.style.border = "2px solid black"
					MenadzerGry.poprzedniObiekt=0
					MenadzerGry.poprzedniPara=0
					MenadzerGry.blokada=true
					MenadzerGryLosowej.wybierzLosowyObraz()
				}
				else
				{
					var f = function() {
						MenadzerGry.poprzedniObiekt.style.border = "2px solid black"
						MenadzerGry.poprzedniObiekt.children[0].style.visibility = "hidden";
						element.children[0].style.visibility = "hidden";
						MenadzerGry.poprzedniObiekt=0
						MenadzerGry.poprzedniPara=0
						MenadzerGry.blokada=true
						MenadzerGryLosowej.wybierzLosowyObraz()
					}
					setTimeout(f , 300);
				}
				
			}
			else
			{
				
				MenadzerGry.poprzedniObiekt = element
				MenadzerGry.poprzedniPara = para
				element.style.border = "2px solid red"
			}
		}
	}
}





