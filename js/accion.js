$(function(){
    $("#modo").on("click", function(){
        if($("#modo").data("modo")=="oscuro"){
            $("body *").css({
                "background-color":"white",
                "color":"black"
            })
            $("strong").css("color","red");
            $("#modo").data("modo","claro");
            $("#modo").attr("src","img/modoblack.svg");
            $("#github").attr("src","img/githubblack.svg");
            $("#link").attr("src","img/linkblack.svg");
            $("#gmail").attr("src","img/gmailblack.svg");
            $("#twitter").attr("src","img/twitterblack.svg");
        }else{
            $("body *").css({
                "background-color":"black",
                "color":"white"
            })
            $("#modo").data("modo","oscuro");
            $("strong").css("color","red");
            $("#modo").attr("src","img/modowhite.svg");
            $("#github").attr("src","img/githubwhite.svg");
            $("#link").attr("src","img/linkwhite.svg");
            $("#gmail").attr("src","img/gmailwhite.svg");
            $("#twitter").attr("src","img/twitterwhite.svg");
        }
    });
});