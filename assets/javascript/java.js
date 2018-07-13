
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBp0s18TUbVk_y-HM2hSl-fHEfFzDm3-q8",
    authDomain: "project1-team3-add85.firebaseapp.com",
    databaseURL: "https://project1-team3-add85.firebaseio.com",
    projectId: "project1-team3-add85",
    storageBucket: "project1-team3-add85.appspot.com",
    messagingSenderId: "325148478422"
};
firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// -----------------------------

// connectionsRef references a specific location in our database.
// All of our connections will be stored in this directory.
var usersRef = database.ref("/users");

// When the client's connection state changes...
usersRef.on("value", function (snap) {

    // If they are connected..
    if (snap.val()) {

        // Add user to the connections list.
        var con = usersRef.push(true);
        // Remove user from the connection list when they disconnect.
        con.onDisconnect().remove();
    }
});

// When first loaded or when the connections list changes...
usersRef.on("value", function (snap) {

    // Display the viewer count in the html.
    // The number of online users is the number of children in the users.
    $("#user").text(snap.numChildren());
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var username = "";
var email = ""
var phoneNum = "";
var password = "";

// OnClick for form
$("#submit").on("click", function () {
    //prevent default
    event.preventDefault();
    // Get input from user & store in variables
    username = $("#username").val().trim();
    email = $("#email").val().trim();
    phoneNum = $("#phoneNum").val().trim();
    password = $("#passward").val().trim();


    console.log("username: " + username);
    console.log("phoneNum : " + phoneNum);
    console.log("email: " + email);
    console.log("password: " + password);

    // Creates variables to connect to firebase
    var itemInfo = {
        username: usernamee,
        email: email,
        phoneNum: phoneNume,
        password: password
    };

    // Pushes trainInfo to database
    database.ref().push(itemInfo);


    clearForm()

});

// Get the modal login
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Get the modal
var modal = document.getElementById('id02');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
