String.prototype.replaceAt=function(index, replacement) {
	    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

var names = [
"Georgia Fear",
"Bella Chao",
"Rachel Ludwikowski",
"Annalisa Crowe",
"Lauren Archer",
"Edie Wilson",
"Abby Brazil",
"Soleil Gaylord",
"Veronica Winham",
"Caroline Walter",
"Nicole Deblasio",
"Gabriela Fasanelli",
"Bri Glover",
"Mallory Barnes",
"Lily Anderson",
"Glennis Murphy",
"MG Rittler",
"Rachel Donner",
"Arianna Gragg",
"Ella Ketchum",
"Julia Valenti",
"Izzy Giordano",
"Lily Lockhart",
"Sam Stevens",
"Alexa Jennings",
"Camille Landon",
"Maria Garman",
"Liv Lantz",
"Julia Stevenson",
"Abby Burke",
"Jackie PS",
"Danielle Okonta",
"Kasia Rozalski",
"Cha'Mia Rothwell",
"Claire Dougherty",
"Brooke Brunet",
"Diana Vizza",
"Meg Tuthill",
"Zoe Dinton",
"Anoush Krafian",
"Gretta Pickett",
"Angela Ortlieb ",
"Kennedy Gochenour",
"Maddi Nobili",
"Muppy",
"Kate Laskowski",
"Drew Thompson",
"Ahri Simons",
"Alec Eschholz",
"Michael Thurston",
"Dom Repucci",
"Trevor Colby",
"Jack Kerin",
"Thomas Lingard",
"Liam Jamieson",
"Sam Morton",
"Shawn Ohaz",
"Cole Andrus",
"Tim Zepf",
"Ben Matejka",
"Lucas Ribeiro",
"Julien Hinz",
"Patrick O'Brien",
"Colin Minor",
"Will Marx",
"Myles Holt ",
"Charlie Wade",
"Donovan Spearman",
"Will Phinney",
"Corbin Mayes",
"MJ Freeman",
"Nick Feffer",
"Ben Ose",
"Brian Mass",
"Ryan Cashman",
"Will Eaton",
"Marco Pompilj",
"Parker Johnson",
"Jason Wang",
"Greg Crowley",
"Quinn Cooney",
"Sean Laverty",
"Amelie Ali",
"Lauren Sapone",
"Drew Palermo",
]

numbers = [
"631",
"276",
"768",
"396",
"761",
"491",
"632",
"369",
"431",
"965",
"784",
"265",
"263",
"749",
"741",
"461",
"872",
"283",
"976",
"726",
"298",
"318",
"821",
"261",
"531",
"387",
"762",
"132",
"251",
"495",
"873",
"368",
"483",
"631",
"187",
"964",
"274",
"614",
"729",
"365",
"765",
"274",
"583",
"719",
"976",
"763",
"831",
"861",
"672",
"713",
"267",
"235",
"764",
"798",
"429",
"329",
"972",
"638",
"368",
"762",
"871",
"873",
"728",
"297",
"417",
"976",
"745",
"325",
"739",
"965",
"753",
"263",
"253",
"537",
"298",
"796",
"736",
"719",
"597",
"518",
"263",
"743",
"531",
"724",
"381"
]

function findMatches(){
	var number = document.getElementById("enneagram").value;
	var genderCheckM= document.getElementById("male").checked;
	var genderCheckF = document.getElementById("female").checked;
	var idealMatch = "000";
	if(genderCheckM == true){ 
		idealMatch = idealPartnerMale(number);	
	}else if(genderCheckF == true){
		idealMatch = idealPartnerFemale(number);	
	}
	else if(genderCheckF == false && genderCheckM == false){
		alert("Please Select A Gender: Sorry We only have support for M/F at this time!");

	}
	else{
		alert("Sorry But We Only Have A Formula For M/F genders at this time!");
	}
	console.log("idealMatch "+ idealMatch);
	var perfectMatches = perfectMatchLookup(idealMatch);
	if(perfectMatches == ""){
		perfectMatches = " None";
	}else{
		perfectMatches = perfectMatches.substring(9);
	}

	var primaryMatches = primaryMatchLookup(idealMatch);
	if(primaryMatches == ""){
		primaryMatches = " None";
	}else{
		primaryMatches = primaryMatches.substring(9);
	}

	var greatMatches = greatMatchLookup(idealMatch);
	if(greatMatches == ""){
		greatMatches = " None";
	}else{
		greatMatches = greatMatches.substring(9);
	}
	// if(matches == ""){
		// alert("Sorry but we couldn't find any ideal matches at this time!\n\n Your Ideal Match Would Be: "+ idealMatch + "\n1.) Perfectionist\n2.) Helper\n3.) Achiever\n4.) Individualist\n5.) Investigator\n6.) Loyalist\n7.) Enthusiast\n8.) Leader\n9.) Peacemaker");
	// }else {
	document.getElementById("perfectMatches").innerHTML = perfectMatches;
	document.getElementById("greatMatches").innerHTML = greatMatches;
	document.getElementById("goodMatches").innerHTML = primaryMatches;
	// }
}


function perfectMatchLookup(idealMatch){
	var allMatches = "\n";
	for(var i = 0; i < numbers.length; i ++){
		if(numbers[i] == idealMatch){
			allMatches = allMatches + ", <br /> -" + names[i];
		}
	}
	return allMatches;
}
function primaryMatchLookup(idealMatch){
	var allMatches = "\n";
	for(var i = 0; i < numbers.length; i ++){
		// if(numbers[i][0] == idealMatch[0] || numbers[i][1] == idealMatch[0] || numbers[i][2] == idealMatch[0]){
		if(numbers[i][0] == idealMatch[0]){
			// if(numbers[i][0] == idealMatch[0]){
			// if(numbers[i][0] == idealMatch[0] || numbers[i][1] == idealMatch[0] || numbers[i][2] == idealMatch[0]){
			allMatches = allMatches + ", <br /> -" + names[i];
			// }
		}
	}
	return allMatches;
}
function greatMatchLookup(idealMatch){
	var allMatches = "\n";
	for(var i = 0; i < numbers.length; i ++){
		if(numbers[i][0] == idealMatch[0] || numbers[i][1] == idealMatch[0] || numbers[i][2] == idealMatch[0]){
		// if(numbers[i][0] == idealMatch[0]){
			// if(numbers[i][0] == idealMatch[0]){
			if(numbers[i][0] == idealMatch[1] || numbers[i][1] == idealMatch[1] || numbers[i][2] == idealMatch[1]){
				if(numbers[i][0] == idealMatch[2] || numbers[i][1] == idealMatch[2] || numbers[i][2] == idealMatch[2]){
					allMatches = allMatches + ", <br /> -" + names[i];
				}
			}
		}
	}
	return allMatches;
}
function idealPartnerMale(number){
	// console.log(typeof number);
	var idealNum = "000";
	//first number ***************
	if(number[0] == 1){
		idealNum = idealNum.replaceAt(0,"2");
	}
	else if(number[0] == 2){
		// idealNum[0] = 4;
		idealNum = idealNum.replaceAt(0,"4");
	}
	else if(number[0] == 3){
		// idealNum[0] = 9;
		idealNum = idealNum.replaceAt(0,"9");
	}
	else if(number[0] == 4){
		// idealNum[0] = 2;
		idealNum = idealNum.replaceAt(0,"2");
	}
	else if(number[0] == 5){
		// idealNum[0] = 1;
		idealNum = idealNum.replaceAt(0,"1");
	}
	else if(number[0] == 6){
		// idealNum[0] = 2;
		idealNum = idealNum.replaceAt(0,"2");
	}
	else if(number[0] == 7){
		// console.log("7 match");
		// idealNum[0] = "1";
		idealNum = idealNum.replaceAt(0,"1");
	}
	else if(number[0] == 8){
		// idealNum[0] = 2;
		idealNum = idealNum.replaceAt(0,"2");
	}
	else if(number[0] == 9){
		// idealNum[0] = 4;
		idealNum = idealNum.replaceAt(0,"4");
	}
	//second number ****************
	if(number[1] == 1){
		idealNum = idealNum.replaceAt(1,"2");
	}
	else if(number[1] == 2){
		// idealNum[0] = 4;
		idealNum = idealNum.replaceAt(1,"4");
	}
	else if(number[1] == 3){
		// idealNum[0] = 9;
		idealNum = idealNum.replaceAt(1,"9");
	}
	else if(number[1] == 4){
		// idealNum[0] = 2;
		idealNum = idealNum.replaceAt(1,"2");
	}
	else if(number[1] == 5){
		// idealNum[0] = 1;
		idealNum = idealNum.replaceAt(1,"1");
	}
	else if(number[1] == 6){
		// idealNum[0] = 2;
		idealNum = idealNum.replaceAt(1,"2");
	}
	else if(number[1] == 7){
		// console.log("7 match");
		// idealNum[0] = "1";
		idealNum = idealNum.replaceAt(1,"1");
	}
	else if(number[1] == 8){
		// idealNum[0] = 2;
		idealNum = idealNum.replaceAt(1,"2");
	}
	else if(number[1] == 9){
		// idealNum[0] = 4;
		idealNum = idealNum.replaceAt(1,"4");
	}
	//third number *****************
	if(number[2] == 1){
		idealNum = idealNum.replaceAt(2,"2");
	}
	else if(number[2] == 2){
		// idealNum[0] = 4;
		idealNum = idealNum.replaceAt(2,"4");
	}
	else if(number[2] == 3){
		// idealNum[0] = 9;
		idealNum = idealNum.replaceAt(2,"9");
	}
	else if(number[2] == 4){
		// idealNum[0] = 2;
		idealNum = idealNum.replaceAt(2,"2");
	}
	else if(number[2] == 5){
		// idealNum[0] = 1;
		idealNum = idealNum.replaceAt(2,"1");
	}
	else if(number[2] == 6){
		// idealNum[0] = 2;
		idealNum = idealNum.replaceAt(2,"2");
	}
	else if(number[2] == 7){
		// console.log("7 match");
		// idealNum[0] = "1";
		idealNum = idealNum.replaceAt(2,"1");
	}
	else if(number[2] == 8){
		// idealNum[0] = 2;
		idealNum = idealNum.replaceAt(2,"2");
	}
	else if(number[2] == 9){
		// idealNum[0] = 4;
		idealNum = idealNum.replaceAt(2,"4");
	}
	// console.log(idealNum);
	return idealNum;
}

function idealPartnerFemale(number){
	var idealNum = "000";
	//first number ***************
	if(number[0] == 1){
		// idealNum[0] = 9;
		idealNum = idealNum.replaceAt(0,"9");
	}
	else if(number[0] == 2){
		// idealNum[0] = 8;
		idealNum = idealNum.replaceAt(0,"8");
	}
	else if(number[0] == 3){
		// idealNum[0] = 1;
		idealNum = idealNum.replaceAt(0,"1");
	}
	else if(number[0] == 4){
		// idealNum[0] = 9;
		idealNum = idealNum.replaceAt(0,"9");
	}
	else if(number[0] == 5){
		// idealNum[0] = 1;
		idealNum = idealNum.replaceAt(0,"1");
	}
	else if(number[0] == 6){ //need to add suport for additional possibility
		// idealNum[0] = 8;
		idealNum = idealNum.replaceAt(0,"8");
	}
	else if(number[0] == 7){ //need to add suport for additional possibility
		// idealNum[0] = 5;
		idealNum = idealNum.replaceAt(0,"5");
	}
	else if(number[0] == 8){
		// idealNum[0] = 9;
		idealNum = idealNum.replaceAt(0,"9");
	}
	else if(number[0] == 9){
		// idealNum[0] = 6;
		idealNum = idealNum.replaceAt(0,"6");
	}
	//second number ****************
	if(number[1] == 1){
		// idealNum[1] = 9;
		idealNum = idealNum.replaceAt(1,"9");
	}
	else if(number[1] == 2){
		// idealNum[1] = 8;
		idealNum = idealNum.replaceAt(1,"8");
	}
	else if(number[1] == 3){
		// idealNum[1] = 1;
		idealNum = idealNum.replaceAt(1,"1");
	}
	else if(number[1] == 4){
		// idealNum[1] = 9;
		idealNum = idealNum.replaceAt(1,"9");
	}
	else if(number[1] == 5){
		// idealNum[1] = 1;
		idealNum = idealNum.replaceAt(1,"1");
	}
	else if(number[1] == 6){ //need to add suport for additional possibility
		// idealNum[1] = 8;
		idealNum = idealNum.replaceAt(1,"8");
	}
	else if(number[1] == 7){ //need to add suport for additional possibility
		// idealNum[1] = 5;
		idealNum = idealNum.replaceAt(1,"5");
	}
	else if(number[1] == 8){
		// idealNum[1] = 9;
		idealNum = idealNum.replaceAt(1,"9");
	}
	else if(number[1] == 9){
		// idealNum[1] = 6;
		idealNum = idealNum.replaceAt(1,"6");
	}

	//Third number ****************
	if(number[2] == 1){
		// idealNum[2] = 9;
		idealNum = idealNum.replaceAt(2,"9");
	}
	else if(number[2] == 2){
		// idealNum[2] = 8;
		idealNum = idealNum.replaceAt(2,"8");
	}
	else if(number[2] == 3){
		idealNum[2] = 1;
		idealNum = idealNum.replaceAt(2,"1");
	}
	else if(number[2] == 4){
		// idealNum[2] = 9;
		idealNum = idealNum.replaceAt(2,"9");
	}
	else if(number[2] == 5){
		// idealNum[2] = 1;
		idealNum = idealNum.replaceAt(2,"1");
	}
	else if(number[2] == 6){ //need to add suport for additional possibility
		// idealNum[2] = 8;
		idealNum = idealNum.replaceAt(2,"8");
	}
	else if(number[2] == 7){ //need to add suport for additional possibility
		// idealNum[2] = 5;
		idealNum = idealNum.replaceAt(2,"5");
	}
	else if(number[2] == 8){
		// idealNum[2] = 9;
		idealNum = idealNum.replaceAt(2,"9");
	}
	else if(number[2] == 9){
		// idealNum[2] = 6;
		idealNum = idealNum.replaceAt(2,"6");
	}
	return idealNum;
}
