let customer = ()=>{
    let eemail = document.getElementById("eemail")
    let ppass = document.getElementById("ppass")

    firebase.auth().createUserWithEmailAndPassword(eemail.value, ppass.value)
    .then((result) => {
        console.log(result)
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      
    });


}