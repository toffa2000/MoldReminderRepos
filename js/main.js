$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});

var chatButton = $(".chatbutton");
var chatBody = $(".chatbody");
var chatMenu = $(".chatmenu");
var closechat = $(".closechat");
var chatdiv = $(".chatdiv");
var minimize = $(".minimize");

chatButton.click(function() {
    chatBody.slideUp(400);

    $(".messdiv").delay(400).fadeIn(400);
    $(".messdiv").delay(2400).fadeOut(2000);
})

chatMenu.click(function() {
    chatBody.slideDown(400, function() {
        chatdiv.slideDown(400);
    });
})

closechat.click(function() {
    chatdiv.slideUp(400, resetValue());
})

minimize.click(function() {
    chatBody.slideUp(400);
})

$(".chatheader h5").click(function() {
    chatBody.slideDown(400);
})


function resetValue() {
    $(".chatname").val("");
    $(".chatmessage").val("");
}
