function hello(){
	console.log("hello git");
}

function sendSomeData(data){
	$.ajax({
		url: 'test.php',
		data: data,
		success: function(result){
			console.log(result);
		}
	})
}

//some custom changes ...