//array of workday hours
var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
// var commentInput = document.querySelector("#comment.hours[i]")
// var userInputSpan = document.querySelector("#hours[i]")

displayComment()
//buttons click to save text in comment box
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

// display comments
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
   
}



