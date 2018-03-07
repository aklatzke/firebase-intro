$(function(){
    let database = firebase.database();

    $(".edit-form").on("submit", function(e){
        e.preventDefault();

        let form = $(this);

        let username = form.find("[name='username']").val();
        let name = form.find("[name='name']").val();
        let email = form.find("[name='email']").val();
        let reason = form.find("[name='reason']").val();    
        
        let key = localStorage.userkey;

        firebase.database().ref('users/' + key).update({
            username: username,
            name: name,
            email: email,
            reason: reason
        });        
    })
})