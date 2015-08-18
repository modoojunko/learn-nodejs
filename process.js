var sum = 0;

function count (array){
	for (var i=2; i < array.length; i++){
		sum += Number(array[i]);
	}
	return sum;
}
console.log(count(process.argv));