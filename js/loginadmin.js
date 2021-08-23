let login =() => {
    let email = document.getElementById("email")
    let pass = document.getElementById("pass")

    firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
  .then((result) => {
    window.location = "dashboart.html"
    console.log("user login sucessfuly")
    console.log(result)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });

}