let register = ()=>{
    let email = document.getElementById("email")
    let pass = document.getElementById("pass")

    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
    .then((result) => {
        window.location = "loginadmin.html"
        console.log(result)
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = (error.message);
      console.log(error)
      
    });


}


let customer = ()=>{
    let email = document.getElementById("email")
    let pass = document.getElementById("pass")

    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
    .then((result) => {
        window.location = "login.html"
        console.log(result)
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      
    });


}