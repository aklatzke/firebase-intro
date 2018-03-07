$(function(){
    let database = firebase.database();

    $(document).on("click", ".delete button", function(e){
        let containingElement = $(this).closest("li");
        let id = containingElement.data("id");
        
        containingElement.remove();
        database.ref("users/" + id).remove();
    })
})