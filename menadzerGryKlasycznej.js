class MenadzerGryKlasycznej
{
	static klikniecieWDiva(element)
	{
		if(element.children[0].style.visibility != "visible" && MenadzerGry.blokada)
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
					
					MenadzerGry.poprzedniObiekt=0
					MenadzerGry.poprzedniPara=0
					MenadzerGry.blokada=true
				}
				else
				{
					var f = function() {
						MenadzerGry.poprzedniObiekt.children[0].style.visibility = "hidden";
						element.children[0].style.visibility = "hidden";
						MenadzerGry.poprzedniObiekt=0
						MenadzerGry.poprzedniPara=0
						MenadzerGry.blokada=true
					}
					
					setTimeout(f , 300);
				}
				
			}
			else
			{
				MenadzerGry.poprzedniObiekt = element
				MenadzerGry.poprzedniPara = para
			}
		}
	}
}





