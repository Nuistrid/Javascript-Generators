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
	document.getElementById("Bits").innerHTML=Result.join(" ");
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
	document.getElementById("Cards").innerHTML=Result.join("\n");
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
	document.getElementById("Dice").innerHTML=result.join("\n");
}

function GenerateString() {
	var str=prompt("Number of strings");
	var Type=prompt("Types of Pools:\n1:a-z\n2:A-Z\n3:Sym\n4:0-9\n5:1,3,4\n6:2,3,4\n7:1,2,4\n8:<,>,|\n9:All\n10:Custom Pool\n11:Custom Pattern\nN:Name");
	if (Type!=11) {
		var min=prompt("Minimum of chars per string");
		var max=prompt("Maximum of chars per string");}
	var Res=[];
	var P=[];
	var A=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var B=[];
	for(i=0;i<A.length;i++) {B[i]=A[i].toUpperCase();}
	for(i=0;i<Custom;i++) {C[i]=prompt((i+1)+": Element");}
	var S=["!","@","#","$","%","^","(",")","*","-","+"];
	var N=["0","1","2","3","4","5","6","7","8","9"];
	var Custom=0;
	var C=[];
	if (Type=="1") {P=A;}
	else if (Type=="N") {
		var N1,N2,N3,N4,N5;
		for(i=0;i<A.length;i++) {
		N1[i]=A[i]+"a";
		N2[i]=A[i]+"e";
		N3[i]=A[i]+"i";	
		N4[i]=A[i]+"o";
		N5[i]=A[i]+"u";}
		P=N1.concat(N2,N3,N4,N5,["yy","gh","th","fr","ph","qu","rhe","pf"]);}
       	else if (Type=="2") {P=B;}
	else if (Type=="3") {P=S;}
	else if (Type=="4") {P=N;}
	else if (Type=="5") {P=A.concat(S,N);}
	else if (Type=="6") {P=B.concat(S,N);}
	else if (Type=="7") {P=A.concat(B,N);}
	else if (Type=="8") {P=["<",">","|"];}
	else if (Type=="9") {P=A.concat(B,S,N,["<",">","|"]);}
	else if (Type=="10") {Custom=prompt("Length of Custom Pool");
		for(i=0;i<Custom;i++) {C[i]=prompt((i+1)+": Element");}
		P=C;}
	else if (Type=="11") {
		var Delim=prompt("Delimiter");
		var L=prompt("# of Distinct Sets");
		var Pattern=[];
		var Q=[];
		var T=0;
		var Settype=prompt("What Type?");
		if (Settype=="Custom") {
		for(k=0;k<L;k++) {Pattern[k]=prompt((k+1)+": Length of Set");}
		} else if (Settype=="Telephone") {Pattern=[3,3,4];
		Delim="-";
		L=3;
		T=N;}
		else if (Settype=="SSN") {Pattern=[3,2,4];
		Delim="-";
		L=3;
		T=N;}
		for(i=0;i<str;i++) {
			for(j=0;j<L;j++) {Q[j]=ChooseN(T,Pattern[j]).replace(/,/g,"");}
			Res[i]=(i+1)+": "+Q.toString().replace(/,/g,Delim);}
	}
	for(i=0;i<str;i++) {
			var Q = ChooseN(P,Rand(min,max)).replace(/,/g,"");
			Res[i]=(i+1)+": "+"("+Q.length+") "+Q;}
	document.getElementById("Strings").innerHTML=Res.join("\n");
}

function GetNumbers() 
{
	var Amount=getElementById("Num Amount").value;
	var Minimum=getElementById("Min").value;
	var Maximum=getElementById("Max").value;
	Result=RandNshow(Minimum,Maximum,Amount);
	document.getElementById("Numbers").innerHTML=Result;
}

