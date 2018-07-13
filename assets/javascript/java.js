
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
console.log("hi");
var database = firebase.database();
console.log("你好");

var username = "";
var email = ""
var phoneNum = "";
var password = "";

// OnClick for form
$("#form").submit( function () {
    console.log("人");
    
    //prevent default
    event.preventDefault();
    console.log($("#username").val());
    
    if ($("#passward").val() == $("#passward2").val()){
    // Get input from user & store in variables
    username = $("#username").val();
    email = $("#email").val();
    phoneNum = $("#phoneNum").val();
    password = $("#sn-password").val();
    console.log(password);
    localStorage.setItem('email',email);
    localStorage.setItem('pass', password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode)
        console.log(errorMessage);
        
      });
      
      

    // Pushes trainInfo to database
 
    $(location).attr('href', 'bids.html')
    }else{
        alert ("Password aren't equal.")
    }

  //  clearForm()

}); 

$("#login").submit( function () {
    //prevent default
    event.preventDefault();
   
    
   
    // Get input from user & store in variables
    email = $("#ln-email").val();
    password = $("#ln-password").val();

    // Creates variables to connect to firebase
   
    // Pushes trainInfo to database
    localStorage.setItem('email',email);
    localStorage.setItem('pass', password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
      

    $(location).attr('href', 'bids.html')
  
  //  clearForm()

}); 

// Get the modal login
var modal1 = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
// Get the modal
var modal2 = document.getElementById('id02');
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
