$("ul").on("click", "li", function (e) {
  $(this).toggleClass("completed");
  e.stopPropagation();
});

// delete 
$("ul").on("click", "span", function (e) { 
    $(this).parent().fadeOut(500, function(){
         $(this).remove();
    });
    e.stopPropagation();
});

//adding todo
$("input[type = 'text']").keypress(function (e) { 
    if(e.which === 13 && $(this).val() !== ""){
        $("ul").append("<li><span><i class='fa fa-window-close' aria-hidden='true'></i></span> " + $(this).val() + "</li>");
        $(this).val("");
    }
});

$(".fa-plus-square").click(function () { 
    $("input[type = 'text']").fadeToggle("0.3");
});
