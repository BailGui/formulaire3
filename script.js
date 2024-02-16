
 const password = document.getElementById("password");
 const myForm = document.getElementById("myForm");
 const subButton = document.getElementById("subButton");
 const mdp = document.getElementById("mdpErreur");
 const resultDiv = document.getElementById('result');
 const hideShow = document.querySelector('#password');
 const hide = document.querySelector('#hide');
            
    myForm.addEventListener('submit', function(event) {                    
        event.preventDefault();
       });

subButton.addEventListener("click", checkName);
 
       hide.addEventListener('click', function () {
const type = hideShow.getAttribute("type") === "password" ? "text" : "password";
    hideShow.setAttribute("type", type);
const butType = hide.textContent === "Montrer" ? "Masquer" : "Montrer";
    hide.textContent = butType;

 });

function checkName(){
    var name = document.getElementById('lenom').value;
    var pname = document.getElementById("leprenom").value;
    if (pname.length > 5) {
        mdp.textContent = "Trop Long, pas de chance";
       }

       else if (name.length > 5) {
        mdp.textContent = "Trop Long, pas de chance";
       }else {
        validPassword(pname);
       }
}

   function validPassword(pname){
       var passwords = hideShow.value;      

    

 
        
                if (passwords.length < 8) {      
                    mdp.textContent = "Trop Court";
 
                }else if(/[A-Z]/.test(passwords) === false){
                    mdp.textContent = "Il manque une Majuscule";
                   
                }else if(/\d/.test(passwords) === false){
                    mdp.textContent = "Il manque un chiffre entre 0 et 9";
               
                }else if ((/[!@#$%^,&;*()_+]/.test(passwords)) === false){
                    mdp.textContent = "Il manque un symbole";
                
                                     
                }else if (passwords.length >= 10 && /[A-Z]/.test(passwords) && /\d/.test(passwords) && ((/[!@#$%^,&;*()_+]/.test(passwords)))) {
                    resultDiv.textContent = "Bienvenue"+" "+pname;
                    resultDiv.style.color = "green";
               setTimeout(function () {
                    window.location.href = "https://2023.webdev-cf2m.be/Guillaume/Siteprefo/";
                   
               }, 2000);
 
   }
   }    

   function checkAge() {
    var ageInput = document.getElementById('ageInput').value;
    var resultDiv = document.getElementById('result');
   
    if (ageInput >= 20) {
        resultDiv.textContent = "Vous avez 20 ans ou plus ! Redirection en cours...";
        resultDiv.style.color = "green";
        setTimeout(function () {
            window.location.href = "formulaire.html";
        }, 1000);
    } else {
        resultDiv.textContent = "Vous n'avez pas l'âge requis.";
        resultDiv.style.color = "red";
    }

    resultDiv.style.display = "block";

}