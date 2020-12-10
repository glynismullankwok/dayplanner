//array of workday hours
var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
// var commentInput = document.querySelector("#comment.hours[i]")
// var userInputSpan = document.querySelector("#hours[i]")

displayComment()
// var emailInput = document.querySelector("#email");
// var passwordInput = document.querySelector("#password");
// var signUpButton = document.querySelector("#sign-up");
// var msgDiv = document.querySelector("#msg");
// var userEmailSpan = document.querySelector("#user-email");
// var userPasswordSpan = document.querySelector("#user-password");

$(".saveBtn").on("click",function(){
    console.log(this)
    //console.log(
        var lsKey =$(this).parent().parent().children("textarea").attr("id")
       // )
    //console.log(
        var lsValue=$(this).parent().parent().children("textarea").val()
        //)
    localStorage.setItem(lsKey, lsValue)
})

// renderLastRegistered();
function displayComment(type, comment){
    for (var i=0; i < hours.length; i++){
        console.log(hours[i])
        var returnX = localStorage.getItem(`comment${hours[i]}`)//template literal
        console.log(returnX)
        //put it on the page

        var customId = `#comment${hours[i]}`
        console.log(
            $(customId)
        )
    }
    //container.comment = comment.hours[i]
}
// LOCAL STORAGE

// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute("class", type);
// }

// function renderLastRegistered() {
//   var email = localStorage.getItem("email");
//   var password = localStorage.getItem("password");

//   if (!email || !password) {
//     return;
//   }

//   userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
// }
//textButton.addEventListener("click", function(event){
    //event.preventDefault();
//})

// signUpButton.addEventListener("click", function(event) {
//   event.preventDefault();

//   var email = document.querySelector("#email").value;
//   var password = document.querySelector("#password").value;

//   if (email === "") {
//     displayMessage("error", "Email cannot be blank");
//   } else if (password === "") {
//     displayMessage("error", "Password cannot be blank");
//   } else {
//     displayMessage("success", "Registered successfully");

//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//     renderLastRegistered();
//   }
// });


