$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});


var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('.container').stop().slideToggle();
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
        $('.container').stop().slideToggle();
        up = !up;
    }
    mypos = newscroll;
});

</script>