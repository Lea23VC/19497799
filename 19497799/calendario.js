console.log("Hola");

/*
Defina objetos similares para los otros meses. 
Para renderizar la tabla de un mes basta saber 
cual es el día de semana inicial, y cuántos días tiene el mes.
*/

var diasEnero = {"firstWeekDay": "sun", "days": 31}
var eventosEnero = [];
var diasFebrero = {"firstWeekDay": "wed", "days": 28}
var eventosFebrero = [];
var diasMarzo = {"firstWeekDay": "wed", "days": 31}
var eventosMarzo = [];
var diasAbril = {"firstWeekDay": "sat", "days": 30}
var eventosAbril = [];
var diasMayo = {"firstWeekDay": "mon", "days": 31}
var eventosMayo = [];
var diasJunio = {"firstWeekDay": "thu", "days": 30}
var eventosJunio = [];
var diasJulio = {"firstWeekDay": "sat", "days": 31}
var eventosJulio = [];
var diasAgosto = {"firstWeekDay": "tue", "days": 31}
var eventosAgosto = [];
var diasSeptiembre = {"firstWeekDay": "fri", "days": 30}
var eventosSemptiembre = [];
var diasOctubre = {"firstWeekDay": "sun", "days": 31}
var eventosOctubre = [];
var diasNoviembre = {"firstWeekDay": "wed", "days": 30}
var eventosNoviembre = [];
var diasDiciembre = {"firstWeekDay": "fri", "days": 31}
var eventosDiciembre = [];


var getVarEventsMonth = function (month) {
	
	
	console.log("Probando uno dos tres " + month);
		
	if (month==0) {
		return [eventosEnero, diasEnero];
	}
	
	if (month==1) {
		return [eventosFebrero, diasFebrero];
	}
	
	if (month==2) {
		return [eventosMarzo, diasMarzo];
	}
	
	if (month==3) {
		return [eventosAbril, diasAbril];
	}
	if (month==4) {
		return [eventosMayo, diasMayo];
	}
	if (month==5) {
		return [eventosJunio, diasJunio];
	}
	if (month==6) {
		return [eventosJulio, diasJulio];
	}
	if (month==7) {
		return [eventosAgosto, diasAgosto];
	}
	if (month==8){
		return [eventosSemptiembre, diasSeptiembre];
	}
	if (month==9){
		return [eventosOctubre, diasOctubre]; 
	}
	if (month==10) {
		return [eventosNoviembre, diasNoviembre];
	}
	if (month==11){
		return [eventosDiciembre, diasDiciembre];
	}
	
}

function addEventToDay(month, day) {
    console.log(month + " " + day);
	
	var eventText;
	var eventosMes = getVarEventsMonth(month)[0];
	
	if (eventosMes[day]) {
		eventText=eventosMes[day];
	}
	
    eventText = window.prompt("Ingrese texto del evento: " , eventText);
	


    /* El chequeo de eventText es obligatorio */
	
	
	console.log("Probando EventText: " + eventText);
	
    
	eventosMes[day] = eventText;
    

    renderSelectedMonth(month);
}
		    
function getHTMLForMonthDay(month, day) {
    var dayId = day;
    var dayHTML = "<td id=\"" + dayId + "\" ";
    dayHTML += "onclick=\"addEventToDay(" + month + "," + day + ")\">";
    dayHTML += day;
	
	var eventosMes = getVarEventsMonth(month)[0];

    if(eventosMes[day]) {
	dayHTML += "<hr/>";
	dayHTML += eventosMes[day];
    }
	
    dayHTML += "</td>";
    return dayHTML;
}



var Index = function (day) {
	
	console.log("AAAAAAAAAAAAAAAARIA " + day);
	
	if (day=="mon") {
		console.log("Retorna 0");
		return 0;
	}
	if (day=="tue") {
		console.log("Retorna 1");
		return 1;
	}
	if (day=="wed") {
		console.log("Retorna 2");
		return 2;
	}
	if (day=="thu") {
		console.log("Retorna 3");
		return 3;
	}
	if (day=="fri") {
		console.log("Retorna 4");
		return 4;
	}
	if (day=="sat") {
		console.log("Retorna 5");
		return 5;
	}
	if (day=="sun") {
		console.log("Retorna 6");
		return 6;
	}

	
	
	
}


function getHTMLForMonthTable(selectedMonth) {
    /*
     El valor de weekDayIdx debe cambiar
     si el primer dia del mes  no es lunes
    */
	
	var diasMes = getVarEventsMonth(selectedMonth)[1];
	console.log("diaaaaa: " + getVarEventsMonth(selectedMonth)[1].firstWeekDay)
    var weekDayIdx = Index(getVarEventsMonth(selectedMonth)["1"].firstWeekDay);
	console.log("A ver si funciono el weekDayIdx: " + weekDayIdx);
    var newHTML = "";
    var newSemanaHTML = ""; 
	
	for (var j=0 ; j < weekDayIdx ; j++) {
		 	newSemanaHTML += getHTMLForMonthDay(selectedMonth, " ");
		 }
	
	
    
    for(var i = 1; i <= diasMes.days; i++) {
		if(weekDayIdx == 0) {
	    	newSemanaHTML += "<tr>";
		}

		newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

		if(weekDayIdx == 6 || (i + 1) > diasMes.days) {
	    	newSemanaHTML += "</tr>";
	    	newHTML += newSemanaHTML;
	    	newSemanaHTML = "";
		}
	
		weekDayIdx = (weekDayIdx + 1) % 7;	
    }

    return newHTML;
}



function getMonthName(month) {
    switch(parseInt(month)) {
    case 0: return "Enero";
    case 1: return "Febrero";
    case 2: return "Marzo";
    case 3: return "Abril";
    case 4: return "Mayo";
    case 5: return "Junio";
    case 6: return "Julio";
    case 7: return "Agosto";
    case 8: return "Septiembre";
    case 9: return "Octubre";
    case 10: return "Noviembre";
    case 11: return "Diciembre";
    }

    throw new Error("No existe mes con indice: " + month);
}


function renderSelectedMonth(selectedMonth) {
    console.log(selectedMonth);

    var monthName = getMonthName(selectedMonth);
    console.log(monthName);

    // Ver: http://stackoverflow.com/questions/13775519/html-draw-table-using-innerhtml
    var newHTML = "";
    newHTML += "<h1>Mes: " + monthName + "</h1>";
    newHTML += "<table>";    
    newHTML += "<tr>";
    newHTML += "<th>Lunes</th>";
    newHTML += "<th>Martes</th>";
    newHTML += "<th>Miercoles</th>";
    newHTML += "<th>Jueves</th>";
    newHTML += "<th>Viernes</th>";
    newHTML += "<th>Sabado</th>";
    newHTML += "<th>Domingo</th>";
    newHTML += "</tr>";

    /*
    Aqui usted debe renderizar la tabla con los dias del mes
    Utilice la información en el objeto 'diasMayo' o el que
    corresponda según el mes seleccionado.

    A modo de demostración, el siguiente código renderiza
    la tabla con el mes de Mayo.
    */

    newHTML += getHTMLForMonthTable(selectedMonth);

    /* Fin de la tabla */
    newHTML += "</table>";

    /* Actualizamos el innerHTML del div currentMonth */
    var monthDiv = document.getElementById("currentMonth");    
    monthDiv.innerHTML = newHTML;
}
