console.log("hi");
var database = firebase.database();

console.log("你好");

var username = "";
var email = ""
var phoneNum = "";
var password = "";


// OnClick for form
$("#form").submit(function () {
    console.log("人");

    //prevent default
    event.preventDefault();
    console.log($("#username").val());

    if ($("#sn-password").val() == $("#password2").val()) {
        // Get input from user & store in variables
        username = $("#username").val();
        email = $("#email").val();
        phoneNum = $("#phoneNum").val();
        password = $("#sn-password").val();
        console.log(password);
        localStorage.setItem('email', email);
        localStorage.setItem('pass', password);

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode)
            console.log(errorMessage);

        });
        // Pushes trainInfo to database
        // $(location).attr('href', 'bids.html')
    }
    else {
        alert("Password aren't equal.")
    }

    //  clearForm()

});

$("#login").submit(function () {
    //prevent default
    event.preventDefault();

    // Get input from user & store in variables
    email = $("#ln-email").val();
    password = $("#ln-password").val();
    console.log(email);
    console.log(password);
    // Creates variables to connect to firebase

    // Pushes trainInfo to database
    localStorage.setItem('email', email);
    localStorage.setItem('pass', password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]        
    });
    //  clearForm()

});

// Get the modal login
var modal1 = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
        console.log("click on modal id01");

    }
}
// Get the modal
var modal2 = document.getElementById('id02');
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
        console.log("click on modal id02");
    }
}

// Get the modal
var modalPhone = document.getElementById('firebaseui-auth-container');
window.onclick = function (event) {
    if (event.target == modalPhone) {
        modalPhone.style.display = "none";
        console.log("click on modal phone");
    }
}

//Global authentication object
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        if (!user.displayName) {
            user.updateProfile({
                displayName: username,
            }).then(function () {
                // Update successful.
                //Redirect to Homepage
                $(location).attr('href', 'index.html');
            }).catch(function (error) {
                // An error happened.
            });
        }
        else {
            $(location).attr('href', 'index.html');
        }
    }
}, function (error) {
    console.log(error);
});


var uiConfig = {
    signInSuccessUrl: 'index.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],

    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
    },
    // Terms of service url.
    tosUrl: '#'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
