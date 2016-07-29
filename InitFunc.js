function Rand(min,max)
{
	//Return a number between min and max, included.
	return parseFloat(Math.floor(Math.random()*(max-min+1)))+parseFloat(min);
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
	return arr[Math.floor(Math.random()*arr.length)];
}

function ChooseN(arr,num,w)
{
	var K=[];
	for (var i=0; i<num; i++) {
		if (w<=0 || w==undefined || w==1) K[i] = Choose(arr);
		else if (w>0) K[i] = arr[Math.floor(Math.pow(Math.random(),w)*arr.length)];
	}
	return K.toString();
}

//Generates Bits
function GenerateData()
{
	var Val=document.getElementById("Number of Bits").value;
	var Div=document.getElementById("Slice Mark").value;
	var Result=[];
	var P=["0","1"];
	for(i=0;i<Val;i++) {Result[i]=ChooseN(P,Div).replace(/,/g,"");}
	document.getElementById("Data Field").innerHTML=Result.join(" ");
}

//Card Deck Shuffler
function CardDeck()
{
	var Cd=["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
	var H=[];
	var S=[];
	var D=[];
	var C=[];
	var Result=[];
	var Dk=document.getElementById("Deck Count").value;
	for(i=0;i<Cd.length;i++) {
		S[i]=Cd[i]+" of Spades";
		H[i]=Cd[i]+" of Hearts";
		C[i]=Cd[i]+" of Clubs";	
		D[i]=Cd[i]+" of Diamonds";}
	if (Dk=="4") {P=S.concat(C,D,H);}
	else if (Dk=="5") {
		var St=[];
		for(i=0;i<Cd.length;i++) {St[i]=Cd[i]+" of Stars";}
		P=S.concat(C,D,H,St);}
	else if (Dk=="6") {
		var Rk=[];
		var Wh=[];
		for(i=0;i<Cd.length;i++) {
			Rk[i]=Cd[i]+" of Rackets";
			Wh[i]=Cd[i]+" of Wheels";}
		P=S.concat(C,D,H,Rk,Wh);}
	for(i=0;i<Dk*Cd.length;i++) {
		var Q=Choose(P);
		R=P.indexOf(Q);
		Result[i]=(i+1)+": "+Q;
		P=P.slice(0,R).concat(P.slice(R+1));}
	document.getElementById("Text Field").innerHTML=Result.join("\n");
}

//Dice Roller
function DiceRoll()
{
	var Num=document.getElementById("Dice Count").value;
	var sides=[];
	var number=[];
	var result=[];
	for(i=0;i<Num;i++) {
		number[i]=prompt("How many of each? ("+(i+1)+")");
		sides[i]=prompt("How many different sides? ("+(i+1)+")");
		result[i]=("("+number[i]+"d"+sides[i]+")"+" -- ["+RandNshow(1,sides[i],number[i])+"]");}
	document.getElementById("Text Field").innerHTML=result.join("\n");
}
