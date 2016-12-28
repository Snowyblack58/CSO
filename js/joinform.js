$("form[name=join-form]").submit(function(e){
	e.preventDefault();
});
$("form[name=join-form] input[type=submit]").click(function(){
	var isFormFilled = true;
	$("form[name=join-form] input[type=text]").each(function(i){
		if($(this).val() === ""){ 
			isFormFilled = false;
		}
	});
	if(isFormFilled){
		$.ajax({
			url: "../php/send_join_email.php",
			type: "post",
			data: $("form[name=join-form]").serialize(),
			success: function(data){
				alert(data);
			},
			error: function(data){
				console.log(data);	
			}
		});
	} else {
		alert("invalid form");	
	}
});