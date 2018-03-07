$(function(){
    let database = firebase.database();

    if (localStorage.userkey) {
        database.ref("users/" + localStorage.userkey).on("value", function(snapshot){
            let data = snapshot.val();

            if( data && data.name ){
                $(".add-form").hide();

                let nameContainer = $(".name-wrapper");
                nameContainer.show().find("h2").text("Welcome " + data.name + "!");

                let editForm = $(".edit-form");

                editForm.find("[name='username']").val(data.username);
                editForm.find("[name='name']").val(data.name);
                editForm.find("[name='email']").val(data.email);
                editForm.find("[name='reason']").val(data.reason);
            
                editForm.show();

                $(".view-all-wrapper").show();
            }
        })
    }
})