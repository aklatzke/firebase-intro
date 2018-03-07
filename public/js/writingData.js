$(function(){

    $(".add-form").on("submit", function(e){
        e.preventDefault();

        let form = $(this);

        let username = form.find("[name='username']").val();
        let name = form.find("[name='name']").val();
        let email = form.find("[name='email']").val();
        let reason = form.find("[name='reason']").val();

        let key = firebase.database().ref('users').push().key;
        
        localStorage.setItem("userkey", key);

        firebase.database().ref('users/' + key).set(
            {
                username: username,
                name: name,
                email: email,
                reason: reason
            }, 
            function(){
                window.location.reload();
            }
        );
    })
})