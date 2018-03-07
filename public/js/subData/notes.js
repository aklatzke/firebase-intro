$(function(){
    let database = firebase.database();

    $(document).on("submit", ".note-form", function (e) {
        e.preventDefault();
        
        let noteField = $(this).find("[name='note']")

        let note = noteField.val();
        noteField.val("");

        let userKey = $(this).closest("li.user").data("id");
        let notesKey = firebase.database().ref('users/' + userKey + "/" + "notes").push().key;
        let newNoteKey = "users/" + userKey + "/notes/" + notesKey;
 
        database.ref(newNoteKey).set({
            value : note
        })
    })    

    $(document).on("click", ".notes-list li .note-delete", function(){
        let noteId = $(this).closest("[data-note-id]").data("noteId");
        let userId = $(this).closest("[data-id]").data("id");

        database.ref("users/" + userId + "/notes/" + noteId).remove();
    })
})