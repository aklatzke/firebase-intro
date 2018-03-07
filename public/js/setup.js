window.firebase = function () {
    var config = {
        apiKey: "AIzaSyAoqnpptVo7Z_n1GKz2vfmXErrTyrx0ZHs",
        authDomain: "examples-klatzke.firebaseapp.com",
        databaseURL: "https://examples-klatzke.firebaseio.com",
        projectId: "examples-klatzke",
        storageBucket: "",
        messagingSenderId: "548109439489"
    };

    firebase.initializeApp(config);

    return firebase;
}()
