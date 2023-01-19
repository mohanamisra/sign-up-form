function passwordConfirmation() {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");
    if(!(confirmPassword === password))
    alert("Password Mismatch! Enter again.");
}