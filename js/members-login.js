function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function () {
		console.log('User signed out.');
	});
}

function onSignIn(googleUser){
	var profile = googleUser.getBasicProfile();
	console.log("onSignIn");
	$.ajax({
		url: "/php/members-auth.php",
		type: "POST",
		data: {
				email: profile.getEmail()
			  },
		dataType: "json",
		success: function(data){
			console.log("data:" + data[0]);
			if(data["isMember"]){
				//display dashboard
				console.log("DASHBOARD ACCESSED");
			} else {
				signOut();
				console.log("NO GO");
				//display google sign in
			}
		},
		error: function(data){
			console.log("UHOH");
			console.log(data);
		}
	});
}

/*
Members dashboard page

Land on page
Check if have google credentials
If no,
	Display sign in frame
If yes,
	Send "email" to server to check if part of CSO
	If no,
		Sign out
		Display sign in frame
	If yes,
		Send ajax call to server
		Display dashboard
*/