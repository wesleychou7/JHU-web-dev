$(function(){

    $("#navbarToggle").blur(function(event){
        var screenWidth = window.innerWidth;
        if(screenWidth < 768){
            $("#collapsable-nav").collapse('hide');
        }
    });
});

(function(global){
    var dc = {};
    var homeHtml = "snippets/home-snippet.html";

    // convinience function for inserting innerHTML for 'select'
    var insertHtml = function(selector, html){
        document.querySelector(selector).innerHTML = html;
    };

    // show loading icon inside element identified by 'selector'
    var showLoading = function(selector){
        var html = "<div class='text-center'><img src='images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    };

    document.addEventListener("DOMContentLoaded", function(event){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function(responseText){
                document.querySelector("#main-content").innerHTML = responseText;
            },
            false
        );
    });

    global.$dc = dc;
})(window);