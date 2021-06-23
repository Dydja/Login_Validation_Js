const form = document.querySelector("form"),
  //declaration des évènements lorsque le champs est vide

  eField = form.querySelector(".email"),
  eInput = eField.querySelector("input"),
  pField = form.querySelector(".password"),
  pInput = pField.querySelector("input");

form.onsubmit = (e) => {
  e.preventDefault(); //preventing form from submitting
  if (eInput.value == "") {
    //if email is empty
    eField.classList.add("shake", "error");
  }else{
    checkEmail();
  }
  if (pInput.value == "") {
    //if password is empty
    pField.classList.add("shake", "error");
  }

  //Lorsqu'on veut supprimer via un certain temps
  setTimeout(() => {
    //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  //let 's work on input keyup
  eInput.onkeyup =
  () =>{
    checkEmail(); // calling checkEmail function
  }

//let's create function
function checkEmail(){
   //Vérification de mes champs lorsqu'on click sur enter
 let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern to validate email
    if (!eInput.value.match(pattern)) {
      //if pattern not  matched with user entered value
      eField.classList.add("error");
      //for the text of error
      let errorText = eField.querySelector(".error-text")
       //if email value is not empty then show please enter valid email else show Email can't be blank
       (eInput.value != "") ? errorText.innerTxt = "Enter a valid email adress" : errorText.innerTxt = "Email can't be blank";

    } else {
      eField.classList.remove("error");
    }
}
//Vérification du champ password
  pInput.onkeyup = () => {
    //if password is empty
    if (pInput.value == "") {
      //if pattern not  matched with user entered value
      pField.classList.add("error");
    } else {
      pField.classList.remove("error");
    }
  };

  //let work on what to do after user filled up proper details
 //if error class not constains in eField and pField then user
 //has entered proper details
 if(!eField.classList.contains('error') && !pField.classList.contains('error')){
    //remove that # and put that url where you 
    //whant to submit the form data
    window.location.href = "#"
    console.log("form Submitted!")
  }

