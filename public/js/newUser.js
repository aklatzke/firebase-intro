$(function(){
    $(".create-new").on("click", function(e){
        localStorage.userkey = false;

        window.location.reload();
    })
})