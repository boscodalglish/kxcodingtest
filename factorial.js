
let n = 5;

console.log(recursive (n));

function recursive (n)
	{
		if (n == 0 || n==1)
			return 1;
		return n * recursive (n - 2);
	}
