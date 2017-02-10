// $(document).ready(function() {
document.addEventListener("DOMContentLoaded", function(event) {
 function odliczanie() {

        var dzisiaj = new Date();

        var dzien = dzisiaj.getDate();
        var miesiac = dzisiaj.getMonth()+1;
        if (miesiac<10) miesiac = "0"+miesiac;
        var rok = dzisiaj.getFullYear();

        var godzina = dzisiaj.getHours();
        if (godzina<10) {
	godzina = "0"+godzina};

        var minuta = dzisiaj.getMinutes();
        if (minuta<10) {
	minuta = "0"+minuta};

        var sekunda = dzisiaj.getSeconds();
        if (sekunda<10) {
	sekunda = "0"+sekunda};

        document.getElementById("data").innerHTML = "Dzisiaj jest: " +dzien+"."+miesiac+"."+rok
        document.getElementById("czas").innerHTML = "Godzina: " +godzina+":"+minuta+":"+sekunda

    }
        var timeout=setInterval(function(){
	odliczanie()}

	,1000)

});

