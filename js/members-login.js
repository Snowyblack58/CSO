function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function () {
		console.log('User signed out.');
		//redirects to home page
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
				console.log("DASHBOARD ACCESSED");
				//show sign out button
				$("#g-signin").remove();
				$("#g-signout").css("visibility","visible");
				//show calendar
				$.ajax({
					type: "POST",
					url: "./php/retrieve_calendar.php",
					success: function(data){
						$("#member-calendar").append(data);
//						console.log(data);	
					},
					error: function(data){
//						console.log("error: " + data);	
					}
				});
				//show welcome banner
				greeting(profile.getName().charAt(0).toUpperCase() + profile.getName().slice(1,profile.getName().indexOf(" ")));
				//show music access tool
				//show contact information
			} else {
				signOut();
				console.log("NO GO");
				//display google sign in
			}
		},
		error: function(data){
			console.log("Failed");
			console.log(data);
		}
	});
}

function greeting(name){
	$("#greeting").text(["Hello","Welcome back","Hey"][Math.floor(Math.random() * 3)] + " " + name + "!");
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