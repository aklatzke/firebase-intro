$(function(){
    let database = firebase.database();

    database.ref("users").on("value", function(snapshot){
        let data = snapshot.val();
        let list = $(".user-list .list");

        list.find(".user").remove();

        for( let key in data ){
            let item = data[key];
            let clone = list.find("> .template").clone().removeClass("template");

            clone.find(".username span").text(item.username);
            clone.find(".name span").text(item.name);
            clone.find(".email span").text(item.email);
            clone.find(".reason span").text(item.reason);

            clone.addClass("user").attr("data-id", key);

            for( let innerKey in item['notes'] ){
                let notesList = clone.find(".notes-list");
                let note = item['notes'][innerKey];
                let noteClone = notesList.find("> .template").clone().removeClass("template");

                noteClone.attr("data-note-id", innerKey);
                noteClone.find(".note-text").text(note.value);
                notesList.append(noteClone);
            }

            list.append(clone);
        }
    })
})