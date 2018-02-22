
$(".chatbutton").click(function() {
    $(".chatbody").slideUp(400);

    $(".messdiv").delay(400).fadeIn(400);
    $(".messdiv").delay(2400).fadeOut(2000);
})

$(".chatmenu").click(function() {
    $(".chatbody").slideDown(400, function() {
        $(".chatdiv").slideDown(400);
    });
})

$(".closechat").click(function() {
    $(".chatdiv").slideUp(400, resetValue());
})

$(".minimize").click(function() {
    $(".chatbody").slideUp(400);
})

$(".chatheader p").click(function() {
    $(".chatbody").slideDown(400);
})


function resetValue() {
    $(".chatname").val("");
    $(".chatmessage").val("");
}
