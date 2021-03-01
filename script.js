function valider() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var longueur = password.length;

    if (password != confirmPassword) {
        alert("Les mots de passe ne correspondent pas");
        return false;
    } else if(longueur < 8) {
        alert("Veuillez entrer un mot de passe plus long (8 caractères minimum)");
        return false; 
    } else {
        alert("Formulaire complet.");
    }
}
