
document.getElementById('nom').onblur = function(){


    let myInput = document.getElementById('nom');
    let myRegex = /^[a-zA-Z]{3,15}$/;

    if(myInput.value.trim() == ""){

        let myError = document.getElementById('error');

        nom.setAttribute("class" , "is-invalid form-control "); 
        myError.innerHTML = "Entre votre Nom!.";
        myError.style.color = 'red';


    } else if(myRegex.test(myInput.value) == false){
        let myError = document.getElementById('error');

        nom.setAttribute("class" , "is-invalid form-control "); 

        myError.innerHTML = "please entrer your name correct!";
        myError.style.color = 'red';


    }else {
        nom.setAttribute("class" , "is-valid form-control ");     
    }


}


document.getElementById('prenom').onblur = function(){


    let myInput = document.getElementById('prenom');
    let myRegex = /^[a-zA-Z]{3,15}$/;

    if(myInput.value.trim() == ""){

        let myError = document.getElementById('error');

        prenom.setAttribute("class" , "is-invalid form-control "); 
        myError.innerHTML = "Entre votre Nom!.";
        myError.style.color = 'red';


    } else if(myRegex.test(myInput.value) == false){
        let myError = document.getElementById('error2');

        prenom.setAttribute("class" , "is-invalid form-control "); 

        myError.innerHTML = "please entrer your prenom correct!";
        myError.style.color = 'red';


    }else {
        prenom.setAttribute("class" , "is-valid form-control ");     
    }


}



document.getElementById('email').onblur = function(){


    let myInput = document.getElementById('email');
    let myRegex = /^((\w+)?.(\w+)?@(gmail|hotmail|yahoo|ofppt).(com|org|net|ma))$/;

    if(myInput.value.trim() == ""){

        let myError = document.getElementById('error3');

        email.setAttribute("class" , "is-invalid form-control "); 
        myError.innerHTML = "Entre votre Nom!.";
        myError.style.color = 'red';


    } else if(myRegex.test(myInput.value) == false){
        let myError = document.getElementById('error3');

        email.setAttribute("class" , "is-invalid form-control "); 

        myError.innerHTML = "please entrer your email correct!";
        myError.style.color = 'red';

    

    }else {
        email.setAttribute("class" , "is-valid form-control ");     
    }


}





document.getElementById('telephone').onblur = function(){


    let myInput = document.getElementById('telephone');
    let myRegex = /^((05)|(06)|(07))[0-9]{8}$/;

    if(myInput.value.trim() == ""){

        let myError = document.getElementById('error4');

        telephone.setAttribute("class" , "is-invalid form-control "); 

        myError.innerHTML = "Entre votre Nom!.";
        myError.style.color = 'red';


    } else if(myRegex.test(myInput.value) == false){
        let myError = document.getElementById('error4');

        telephone.setAttribute("class" , "is-invalid form-control "); 

        myError.innerHTML = "please entrer your number correct!";
        myError.style.color = 'red';


    }else {
        telephone.setAttribute("class" , "is-valid form-control ");     
    }


}






















let myForm = document.getElementById('myForm');

        myForm.addEventListener('submit', function(e) {
            let myInput = document.getElementById('nom');
            let myInput2 = document.getElementById('prenom');
            let email = document.getElementById('email');
            let telephone = document.getElementById('telephone');
            let myRegex = /^[a-zA-Z]{3,15}$/;
            // let myRegexEmail =  /^[a-z0-9](.?[a-z0-9])@g(oogle)?mail.com$/ 
            let myRegexEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            let myRegexTele = /^((05)|(06)|(07))[0-9]{8}$/;


//<=============== if for Nom =============>

            if(myInput.value.trim() == ""){

                let myError = document.getElementById('error');

                nom.setAttribute("class" , "is-invalid form-control "); 
                myError.innerHTML = "Entre votre Nom!.";
                myError.style.color = 'red';

                e.preventDefault();
                
            } else if(myRegex.test(myInput.value) == false){
                let myError = document.getElementById('error');

                nom.setAttribute("class" , "is-invalid form-control "); 

                myError.innerHTML = "please entrer your name correct!";
                myError.style.color = 'red';

                e.preventDefault()
            
            }else {
                nom.setAttribute("class" , "is-valid form-control "); 
            }

//<=============== if for Prénom =============>


            if(myInput2.value.trim() == ""){

                let myError2 = document.getElementById('error2');

                prenom.setAttribute("class" , "is-invalid form-control "); 
                myError2.innerHTML = "Entre votre Prénom!.";
                myError2.style.color = 'red';

                e.preventDefault();
                
            } else if(myRegex.test(myInput2.value) == false){
                let myError2 = document.getElementById('error2');

                prenom.setAttribute("class" , "is-invalid form-control "); 

                myError2.innerHTML = "please entrer your name correct!";
                myError2.style.color = 'red';
                
                e.preventDefault()
            
            }else {
                floatingInput2.setAttribute("class" , "is-valid form-control "); 
            }

            
//<=============== if for Email =============>


            if(email.value.trim() == ""){

                let myError = document.getElementById('error3');

                email.setAttribute("class" , "is-invalid form-control "); 

                myError.innerHTML = "Entre votre Email!.";
                myError.style.color = 'red';

                e.preventDefault();
                
            } else if(myRegexEmail.test(myInput3.value) == false){
                let myError3 = document.getElementById('error3');

                email.setAttribute("class" , "is-invalid form-control "); 

                myError3.innerHTML = "please entrer your email correct!";
                myError3.style.color = 'red';

                e.preventDefault()
            }else {
                floatingInput3.setAttribute("class" , "is-valid form-control "); 
            }



//<=============== if for telephone =============>


            if(telephone.value.trim() == ""){

                let myError = document.getElementById('error4');

                telephone.setAttribute("class" , "is-invalid form-control "); 
                myError.innerHTML = "Entre votre Number!.";
                myError.style.color = 'red';

                e.preventDefault();
                
            } else if(myRegexTele.test(myInput4.value) == false){
                let myError4 = document.getElementById('error4');

                telephone.setAttribute("class" , "is-invalid form-control "); 

                myError4.innerHTML = "please entrer you Number!";
                myError4.style.color = 'red';

                e.preventDefault()
            }else {
                floatingInput4.setAttribute("class" , "is-valid form-control "); 
                
            }


//<=============== if for Chek-box =============>


            let errorCkebox = document.getElementById("errorChekbox");
            // let dangerError = document.getElementById("dangerError");

            if(document.getElementById("inlineRadio1").checked === false && document.getElementById("inlineRadio2").checked  === false  ){
                errorCkebox.innerHTML = "please chose one"
                errorCkebox.style.color = 'red';
            }  else {
                errorCkebox.innerHTML = ""
            }

//<=============== if for Chek-box =============>

            // let options = document.getElementById('options') ;
            // console.log(options)
            // if(options == ""){
            //     console.log("Please select a option")
            //     document.myForm.options.focus();
            //     return false
            // }else{
            //     console.log("Validation is succesful")
            //     return true;
            // }




            
            
















            
    })




//<=============== code email and telephone =============>
        // [a-z0-9](.?[a-z0-9])@g(oogle)?mail.com$
        // ^((05)|(06)|(07))[0-9]{8}$




























        




//floatingInput.setAttribute("class" , "is-invalid form-control "); 



// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");


// document.forms[0].onsubmit = function(e){

//     let userValid = false;
//     let ageValid = false;

//     if(userInput.value != "" && userInput.value.length<= 10){
//         userValid = true;

//     }

//     if(ageInput.value != ""){
//         ageValid = true;
//     }

//     if(userValid === false || ageValid === false){

//         e.preventDefault();
    
//     }
// }































