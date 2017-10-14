function verify(){
    if($("#join-name").val() == ""){
        alert("Please enter a name");
        return false;
    } else if($("#join-email").val() == "") {
        alert("Please enter an email");
        return false;
    } else {
        return true;
    }
}

$("#submit").click(function(){
    if(verify()){
        $.ajax({
            method: "POST",
            url: "../php/member_join.php",
            data: {
                name: $("#join-name").val(),
                email: $("#join-email").val()
            },
            success: function(data){
                alert("success");
            },
            error: function(data){
                alert("failure");
                console.log(data);
            }
        });
    }
})