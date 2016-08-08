function Rand(min,max)
{
	//Return a number between min and max, included.
	return parseFloat(Math.floor(Math.random()*( max - min + 1 ) ) + min);
}

function RandP(min,max)
{
	//Random number between (inclusive) min and max, included and floats
	return parseFloat(Math.random()*(max-min)+min);
}

function RandNshow(min,max,num)
{
	var K=[];
	for (var i=0; i<num; i++) {
		K[i] = Rand(min,max);
	}
	return K.toString();
}

function RandN(min,max,num)
{
	var K=[];
	for (var i=0; i<num; i++) {
		K[i] = Rand(min,max);
	}
}

function Choose(arr)
{
	//Returns an element from an array at random.
	return arr[Math.random() * arr.length | 0];
}

function ChooseN(arr,num,w)
{
	var K=[];
	for (var i=0; i<num; i++) {
		if (w<=0 || w==undefined || w==1) K[i] = arr[Math.random()*arr.length | 0];
		else if (w>0) K[i] = arr[Math.floor(Math.pow(Math.random(),w)*arr.length)];
	}
	return K.toString();
}

//Generates Bits, Bytes and Numbers
function GenerateData()
{
	var Value=document.getElementById("Data Pieces").value;
	var Div=document.getElementById("Slice Mark").value;
	var divThree=document.getElementById("Secondary Slice Mark").value;
	var divFour=document.getElementById("Tertiary Slice Mark").value;
	var divTwo="";
	var divFive="";
	var Result=[];
	var Pool=["0","1"];
	if (divThree=="2") {
		divTwo=" ";
	} else if (divThree=="16") {
		Pool=Pool.push("2","3","4","5","6","7","8","9","A","B","C","D","E","F");
		divTwo=" ";
	} else if (divThree=="8") {
		Pool=Pool.push("2","3","4","5","6","7");
		divTwo=" ";
	} else if (divThree=="4" && divFour=="NAC") {
		Pool=["0","1","2","3","4","5","6","7","8","9","B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Z"];
		divTwo="-";
	} else if (divThree=="4" && divFour=="DNA") {
		Pool=["A","C","T","G"];
		Div=3;
	} else if (divThree=="4" && divFour=="RNA") {
		Pool=["A","C","U","G"];
		Div=3;
	} else if (divThree=="4" && !(divFour=="NAC" || divFour=="DNA" || divFour=="RNA")) {
		Pool=Pool.push("2","3");
	} else if (divThree=="3" && divFour=="AMN") {
		Pool=["Ala","Cys","Asp","Glu","Phe","Gly","His","Ile","Lys","Leu","Met","Asn","Pyl","Pro","Gln","Arg","Ser","Thr","Sec","Val","Trp","Tyr"];
		divTwo="-";
		divFive="-";
	}
	for(i=0;i<Value;i++) {
		Result[i]=ChooseN(Pool,Div).replace(/,/g,divFive);
	}
	document.getElementById("Data").innerHTML=Result.join(divTwo);
}

//Card Deck Shuffler
function CardDeck() {
	var cardNames = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
	var Result = [];
	var DeckCount = document.getElementById("Deck Count").value;
	var HandCount = document.getElementById("Hand Count").value;

	//Suit Names

	var suitNames = [" of Spades"," of Hearts"," of Clubs"," of Diamonds"];
	if (DeckCount == "5") {
		suitNames.push(" of Stars");
	} else if (DeckCount == "6") {
		suitNames.push(" of Rackets");
		suitNames.push(" of Wheels");
	} else if (DeckCount == "8") {
		suitNames.push(" of Roses");
		suitNames.push(" of Axes");
		suitNames.push(" of Tridents");
		suitNames.push(" of Doves");
	} else if (DeckCount == "1") {
		suitNames=[" of Wands"," of Cups"," of Swords"," of Coins"];
		cardNames.push("Knight");
		cardNames[10]="Page";
	}

	//Builds Suits
	
	var suits = [];
	for(i=0;i<cardNames.length;i++) {
		for(j=0;j<suitNames.length;j++) {
			if (i===0) suits.push([]);
			suits[j].push(cardNames[i] + suitNames[j]);
		}
	}

	var Pool = Array.prototype.concat.apply([],suits);
	var Full = cardNames.length * suitNames.length;
	var Q="";
	
	if(HandCount == 0 || HandCount == "" || HandCount == null) {
		HandCount = Pool.length;
	}

	for(i=0;i<HandCount;i++) {
		Q = Choose(Pool);
		R = Pool.indexOf(Q);
		Result[i] = (i+1)+": "+Q;
		Pool = Pool.slice(0,R).concat(Pool.slice(R+1));
	}
	document.getElementById("Cards").innerHTML = Result.join("<br>");
}

//Dice Roller
function DiceRoll()
{
	var number=document.getElementById("Dice Count").value;
	var sides=[];
	var diceNumber=[];
	var result=[];
	for(i=0;i<number;i++) {
		diceNumber[i]=prompt("How many of each? ("+(i+1)+")");
		sides[i]=prompt("How many different sides? ("+(i+1)+")");
		result[i]=("("+diceNumber[i]+"d"+sides[i]+")"+" -- ["+RandNshow(1,sides[i],diceNumber[i])+"]");
	}
	document.getElementById("Dice").innerHTML=result.join("\n");
}

function GenerateString() {
	var str=prompt("Number of strings");
	var Type=prompt("Types of Pools:\n1:a-z\n2:A-Z\n3:Sym\n4:0-9\n5:1,3,4\n6:2,3,4\n7:1,2,4\n8:<,>,|\n9:All\n10:Custom Pool\n11:Custom Pattern\nN:Name");
	if (Type!=11) {
		var min=prompt("Minimum of chars per string");
		var max=prompt("Maximum of chars per string");
	}
	var Res=[];
	var Pool=[];
	var Alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var upperAlphabet=[];
	for(i=0;i<A.length;i++) {upperAlphabet.push(Alphabet[i].toUpperCase());}
	for(i=0;i<Custom;i++) {Cust.push(prompt((i+1)+": Element"));}
	var Symbol=["!","@","#","$","%","^","(",")","*","-","+","<",">","|","\'","\""];
	var Numeric=["0","1","2","3","4","5","6","7","8","9"];
	var Custom=0;
	var Cust=[];
	if (Type=="1") {Pool=Alphabet;}
       	else if (Type=="2") {Pool=upperAlphabet;
	} else if (Type=="3") {Pool=Symbol;
	} else if (Type=="4") {Pool=Numeric;
	} else if (Type=="5") {Pool=Alphabet.concat(Symbol,Numeric);
	} else if (Type=="6") {Pool=upperAlphabet.concat(Symbol,Numeric);
	} else if (Type=="7") {Pool=Alphabet.concat(upperAlphabet,Numeric);
	} else if (Type=="8") {Pool=["<",">","|"];}
	else if (Type=="9") {Pool=Alphabet.concat(upperAlphabet,Symbol,Numeric,["<",">","|"]);
	} else if (Type=="10") {
		Custom=prompt("Length of Custom Pool");
		for(i=0;i<Custom;i++) {Cust.push(prompt((i+1)+": Element"));}
		Pool=Cust;
	}
	var U="";
	for(i=0;i<str;i++) {
			U=ChooseN(Pool,Rand(min,max)).replace(/,/g,"");
			if (min>1 && Pool==Numeric && U[0]=="0") {
				U[0]="";
			}
			Res[i]=(i+1)+": "+"("+U.length+") "+U;}
	document.getElementById("Strings").innerHTML=Res.join("\n");
}

