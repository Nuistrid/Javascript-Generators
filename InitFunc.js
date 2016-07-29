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
