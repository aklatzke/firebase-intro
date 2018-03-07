$(function(){
    $(document).on("click", ".edit button", function(){
        let containingElement = $(this).closest("li");
        let id = containingElement.data("id");

        localStorage.userkey = id;
        
        window.location.href = "/";
    })
})