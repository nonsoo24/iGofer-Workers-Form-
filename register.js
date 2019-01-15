// var surname = document.forms["vform"]["surname"];
// var firstname = document.forms["vform"]["firstname"];
// var gender = document.forms["vform"]["gender"];
// var dbirth = document.forms["vform"]["bdaymonth"];
// var email = document.forms["vform"]["email"];
// var number = document.forms["vform"]["number"];
// var caddress = document.forms["vform"]["caddress"];
// var paddress = document.forms["vform"]["paddress"];
// var status = document.forms["vform"]["status"];
// var origin = document.forms["vform"]["sorigin"];
// var residence = document.forms["vform"]["residence"];
// var lg = document.forms["vform"]["lgovt"];
// var expertise = document.forms["vform"]["expertise"];
// var experience = document.forms["vform"]["experience"];
// var ict = document.forms["vform"]["ict"];
// var pass = document.forms["vform"]["pass"]; 
// var cpass = document.forms["vform"]["cpass"];



// var surname_error =document.getElementById("surname_error");
// var firstname_error =document.getElementById("firstname_error");
// var gender_error =document.getElementById("gender_error");
// var dbirth_error =document.getElementById("dbirth_error");
// var pnumber_error =document.getElementById("pnumber_error");
// var email_error =document.getElementById("email_error");
// var caddress_error =document.getElementById("caddress_error");
// var paddress_error =document.getElementById("paddress_error");
// var status_error =document.getElementById("status_error");
// var origin_error =document.getElementById("origin_error");
// var residence_error =document.getElementById("residence_error");
// var experience_error =document.getElementById("experience_error");
// var expertise_error =document.getElementById("expertise_error");
// var lgovt_error =document.getElementById("lgovt_error");
// var ict_error =document.getElementById("ict_error");
// var pass_error =document.getElementById("pass_error");
// var cpass_error =document.getElementById("cpass_error");


// surname.addEventListener("blur", surnameVerify, true);
// firstname.addEventListener("blur", firstnameVerify, true);
// gender.addEventListener("blur", genderVerify, true);
// dbirth.addEventListener("blur", dbirthVerify, true);
// pnumber.addEventListener("blur", pnumberVerify, true);
// email.addEventListener("blur", emailVerify, true);
// caddress.addEventListener("blur", caddressVerify, true);
// paddress.addEventListener("blur", paddressVerify, true);
// status.addEventListener("blur", statusVerify, true);
// origin.addEventListener("blur", originVerify, true);
// residence.addEventListener("blur", residenceVerify, true);
// experience.addEventListener("blur", experienceVerify, true);
// lgovt.addEventListener("blur", lgovtVerify, true);
// ict.addEventListener("blur", ictVerify, true);
// pass.addEventListener("blur", passVerify, true);
// cpass.addEventListener("blur", cpassVerify, true);



// function validate() {
// if (surname.value == "") {
//     surname.style.border = "1px solid red";
//     surname_error.textContent = "Surname is required";
//     surname.focus();
//     return false;
// }

// if (firstame.value == "") {
//     firstame.style.border = "1px solid red";
//     firstame_error.textContent = "firstame is required";
//     firstame.focus();
//     return false;
// }


// if (gender.value == "") {
//     gender.style.border = "1px solid red";
//     gender_error.textContent = "gender is required";
//     gender.focus();
//     return false;
// }

// if (bdaymonth.value == "") {
//     bdaymonth.style.border = "1px solid red";
//     dbirth_error.textContent = "Enter your Date of birth";
//     bdaymonth.focus();
//     return false;
// }

// if (pnumber.value == "") {
//     pnumber.style.border = "1px solid red";
//     pnumber_error.textContent = "Enter your Phone number";
//     pnumber.focus();
//     return false;
// }

// if (caddress.value == "") {
//     caddress.style.border = "1px solid red";
//     caddress_error.textContent = "Contact address is required";
//     caddress.focus();
//     return false;
// }

// if (paddress.value == "") {
//     paddress.style.border = "1px solid red";
//     paddress_error.textContent = "Permanent address is required";
//     paddress.focus();
//     return false;
// }

// if (email.value == "") {
//     email.style.border = "1px solid red";
//     email_error.textContent = "Email is required";
//     email.focus();
//     return false;
// }

// if (origin.value == "") {
//     origin.style.border = "1px solid red";
//     origin_error.textContent = "State of origin is required";
//     origin.focus();
//     return false;
// }

// if (residence.value == "") {
//     residence.style.border = "1px solid red";
//     residence_error.textContent = "State of residence is required";
//     residence.focus();
//     return false;
// }

// if (status.value == "") {
//     status.style.border = "1px solid red";
//     status_error.textContent = "Marital status is required";
//     status.focus();
//     return false;
// }

// if (lgovt.value == "") {
//     lgovt.style.border = "1px solid red";
//     lgovt_error.textContent = "Local Government Area is required";
//     lgovt.focus();
//     return false;
// }



// if (expertise.value == "") {
//     expertise.style.border = "1px solid red";
//     expertise_error.textContent = "Area of expertise is required";
//     expertise.focus();
//     return false;
// }

// if (experience.value == "") {
//     experience.style.border = "1px solid red";
//     experience_error.textContent = "Level of experience is required";
//     experience.focus();
//     return false;
// }

// if (ict.value == "") {
//     ict.style.border = "1px solid red";
//     ict_error.textContent = "Level of ICT is required";
//     ict.focus();
//     return false;
// }

// if (expertise.value == "") {
//     expertise.style.border = "1px solid red";
//     expertise_error.textContent = "Area of expertise is required";
//     expertise.focus();
//     return false;
// }

// if (pass.value == "") {
//     pass.style.border = "1px solid red";
//     pass_error.textContent = "Password is required";
//     pass.focus();
//     return false;
// }

// if (cpass.value == "") {
//     cpass.style.border = "1px solid red";
//     cpass_error.textContent = "Confirmation password is required";
//     cpass.focus();
//     return false;
// }

// if (pass.value != pass.value) {
//     pass.style.border = "1px solid red";
//     cpass.style.border = "1px solid red";
//     pass_error.innerHTML = "The two passwords do not match";
//     return false;
// }
// }


// function surnameVerify(){
// if (surname.value != "") {
// surname.style.border = "1px solid red";
// surname_error.innerHTML
// return true;
// }
// }

// function firstnameVerify(){
// if (firstname.value != ""){
// firstname.style.border = "1px solid red";
// firstname_error.innerHTML
// return true;
// }   
// }

// function emailVerify(){
// if (email.value != ""){
// email.style.border = "1px solid red";
// email_error.innerHTML
// return true;
// }
// }

// function genderVerify(){
// if (gender.value != ""){
// gender.style.border = "1px solid red";
// gender_error.innerHTML
// return true;
// }
// }

// function caddressVerify(){
// if (caddress.value != ""){ 
// caddress.style.border = "1px solid red";
// caddress_error.innerHTML
// return true;
// }
// }

// function paddressVerify(){
// if (paddress.value != ""){
// paddress.style.border = "1px solid red";
// paddress_error.innerHTML
// return true;
// }
// }

// function genderVerify(){
// if (gender.value != ""){
// gender.style.border = "1px solid red";
// gender_error.innerHTML
// return true;
// }
// }

// function statusVerify(){
// if (status.value != ""){
// status.style.border = "1px solid red";
// status_error.innerHTML
// return true;
// }  
// }

// function originVerify(){
// if (origin.value != ""){
// origin.style.border = "1px solid red";
// origin_error.innerHTML
// return true;
// }  
// }

// function residenceVerify(){
// if (residence.value != ""){
// residence.style.border = "1px solid red";
// residence_error.innerHTML
// return true;
// }
// }

// function lgovtVerify(){
// if (lgovt.value != ""){
// lgovt.style.border = "1px solid red";
// lgovt_error.innerHTML
// return true;
// }
// }

// function experienceVerify(){
// if (experience.value != ""){
// experience.style.border = "1px solid red";
// experience_error.innerHTML
// return true;
// } 
// }

// function ictVerify(){
// if (ict.value != ""){ 
// ict.style.border = "1px solid red";
// ict_error.innerHTML
// return true;
// }
// }

// function passVerify(){
// if (pass.value != ""){
// pass.style.border = "1px solid red";
// pass_error.innerHTML
// return true;
// }
// }

// function cpassVerify(){
// if (cpass.value != ""){
// cpass.style.border = "1px solid red";
// cpass_error.innerHTML
// return true;
// } 
// }
var regex = /^[A-Za-z]+$/;
var inputList = document.getElementsByTagName("input");
var selectList = document.getElementsByTagName("select");

var surnameValidate = document.getElementById("surname_error");
surnameValidate.style.display = "none";

var noNumberValidate = document.getElementById("no_number");
noNumberValidate.style.display = "none";

var firstnameValidate = document.getElementById("firstname_error");
firstnameValidate.style.display = "none";

var genderValidate = document.getElementById("gender_error");
genderValidate.style.display = "none";

var dbirthValidate = document.getElementById("dbirth_error");
dbirthValidate.style.display = "none";

var emailValidate = document.getElementById("email_error");
emailValidate.style.display = "none";

var pnumberValidate = document.getElementById("pnumber_error");
pnumberValidate.style.display = "none";

var caddressValidate = document.getElementById("caddress_error");
caddressValidate.style.display = "none";

var paddressValidate = document.getElementById("paddress_error");
paddressValidate.style.display = "none";

var statusValidate = document.getElementById("status_error");
statusValidate.style.display = "none";

var originValidate = document.getElementById("origin_error");
originValidate.style.display = "none";

var residenceValidate = document.getElementById("residence_error");
residenceValidate.style.display = "none";

var lgovtValidate = document.getElementById("lgovt_error");
lgovtValidate.style.display = "none";

var expertiseValidate = document.getElementById("expertise_error");
expertiseValidate.style.display = "none";

var experienceValidate = document.getElementById("experience_error");
experienceValidate.style.display = "none";

var ictValidate = document.getElementById("ict_error");
ictValidate.style.display = "none";

var passValidate = document.getElementById("pass_error");
passValidate.style.display = "none";

var cpassValidate = document.getElementById("cpass_error");
cpassValidate.style.display = "none";


document.getElementById("form_submit").addEventListener("click", function(){
    if(inputList[0].value === ""){
        surnameValidate.style.display = "block";
   // } else if((inputList[0].value != "")){
     //   if(!regex.test(inputList[0].value)){
       //     noNumberValidate.style.display = "block";
       // }
       // noNumberValidate.style.display = "none";
    } else{
        surnameValidate.style.display = "none";
    }
    if(inputList[1].value === ""){
        firstnameValidate.style.display = "block";
    } else{
        firstnameValidate.style.display = "none";

    }
    if(inputList[2].value != ""){
        
    }
    if(selectList[0].options[selectList[0].selectedIndex].value === ""){
        genderValidate.style.display = "block";
    } else{
        genderValidate.style.display = "none";

    }
    if(inputList[3].value === ""){
        dbirthValidate.style.display = "block";
    } else{
        dbirthValidate.style.display = "none";
        
    }
    if(inputList[4].value === ""){
        emailValidate.style.display = "block";
    } else{
        emailValidate.style.display = "none";
        
    }
    if(inputList[5].value === ""){
        pnumberValidate.style.display = "block";
    } else{
        pnumberValidate.style.display = "none";
        
    }
    if(inputList[6].value === ""){
        caddressValidate.style.display = "block";
    } else{
        caddressValidate.style.display = "none";
        
    }
    if(inputList[7].value === ""){
        paddressValidate.style.display = "block";
    } else{
        paddressValidate.style.display = "none";
        
    }
    if(selectList[1].options[selectList[1].selectedIndex].value === ""){
        statusValidate.style.display = "block";
    } else{
        statusValidate.style.display = "none";

    }
    if(selectList[2].options[selectList[2].selectedIndex].value === ""){
        originValidate.style.display = "block";
    } else{
        originValidate.style.display = "none";

    }
    if(selectList[3].options[selectList[3].selectedIndex].value === ""){
        residenceValidate.style.display = "block";
    } else{
        residenceValidate.style.display = "none";

    }
    if(selectList[4].options[selectList[4].selectedIndex].value === ""){
        lgovtValidate.style.display = "block";
    } else{
        lgovtValidate.style.display = "none";

    }
    if(selectList[5].options[selectList[5].selectedIndex].value === ""){
        expertiseValidate.style.display = "block";
    } else{
        expertiseValidate.style.display = "none";

    }
    if(inputList[8].value != ""){
        
    }
    if(inputList[9].value === ""){
        experienceValidate.style.display = "block";
    } else{
        experienceValidate.style.display = "none";       
        
    }
    if(selectList[6].options[selectList[6].selectedIndex].value === ""){
         ictValidate.style.display = "block";
    } else{
        ictValidate.style.display = "none";

    }
    if(inputList[10].value === ""){
        passValidate.style.display = "block";
    } else{
        passValidate.style.display = "none";
        
    }
    if(inputList[11].value === ""){
        cpassValidate.style.display = "block";
    } else{
        cpassValidate.style.display = "none";
        
    }
    if(inputList[10].value != "" && inputList[11].value != ""){
        if(inputList[10].value === inputList[11].value){

        }
    }

});

inputList[0].addEventListener("focus", function(){
    if(inputList[0].value === ""){
        surnameValidate.style.display = "block";
    }
    surnameValidate.style.display = "none";
});

inputList[1].addEventListener("focus", function(){
    if(inputList[1].value === ""){
        firstnameValidate.style.display = "block";
    }
    firstnameValidate.style.display = "none";
});

selectList[0].addEventListener("focus", function(){
    if(selectList[0].value === ""){
        genderValidate.style.display = "block";
    }
    genderValidate.style.display = "none";
});

inputList[4].addEventListener("focus", function(){
    if(inputList[4].value === ""){
        dbirthValidate.style.display = "block";
    }
    dbirthValidate.style.display = "none";
});

inputList[5].addEventListener("focus", function(){
    if(inputList[5].value === ""){
        emailValidate.style.display = "block";
    }
    emailValidate.style.display = "none";
});

inputList[6].addEventListener("focus", function(){
    if(inputList[6].value === ""){
        pnumberValidate.style.display = "block";
    }
    pnumberValidate.style.display = "none";
});

inputList[7].addEventListener("focus", function(){
    if(inputList[7].value === ""){
        caddressValidate.style.display = "block";
    }
    caddressValidate.style.display = "none";
});

inputList[8].addEventListener("focus", function(){
    if(inputList[8].value === ""){
        paddressValidate.style.display = "block";
    }
    paddressValidate.style.display = "none";
});

selectList[1].addEventListener("focus", function(){
    if(selectList[1].value === ""){
        statusValidate.style.display = "block";
    }
    statusValidate.style.display = "none";
});

selectList[2].addEventListener("focus", function(){
    if(selectList[2].value === ""){
        originValidate.style.display = "block";
    }
    originValidate.style.display = "none";
});

selectList[3].addEventListener("focus", function(){
    if(selectList[3].value === ""){
        residenceValidate.style.display = "block";
    }
    residenceValidate.style.display = "none";
});

selectList[4].addEventListener("focus", function(){
    if(selectList[4].value === ""){
        lgovtValidate.style.display = "block";
    }
    lgovtValidate.style.display = "none";
});

selectList[5].addEventListener("focus", function(){
    if(selectList[5].value === ""){
        expertiseValidate.style.display = "block";
    }
    expertiseValidate.style.display = "none";
});

inputList[9].addEventListener("focus", function(){
    if(inputList[9].value === ""){
        experienceValidate.style.display = "block";
    }
    experienceValidate.style.display = "none";
});

selectList[6].addEventListener("focus", function(){
    if(selectList[6].value === ""){
        ictValidate.style.display = "block";
    }
    ictValidate.style.display = "none";
});

inputList[10].addEventListener("focus", function(){
    if(inputList[10].value === ""){
        passValidate.style.display = "block";
    }
    passValidate.style.display = "none";
});

inputList[11].addEventListener("focus", function(){
    if(inputList[11].value === ""){
        cpassValidate.style.display = "block";
    }
    cpassValidate.style.display = "none";
});
