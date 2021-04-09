// function for date and time
$(document).ready(function () {
    var dateParagraph = $("#currentDay");
    var todayDate = moment().format('dddd, MMMM Do YYYY');
    dateParagraph.text(todayDate);
});

//button to clear local storage and refresh the page
$("#clear").click(function () {
    localStorage.clear();
    location.reload()
});

//code for each timeslot, to save input data (same as above)

var input_textarea1 = document.querySelector('#note1');
var save_button1 = document.querySelector('#saveNote1');
//retrieves previously save text to display
input_textarea1.value = localStorage.getItem('data1');
//Save button is clicked, stores data to local storage
saveNote1.addEventListener('click', updateOutput1);
function updateOutput1() {
    localStorage.setItem('data1', input_textarea1.value);
};

var input_textarea2 = document.querySelector('#note2');
var save_button2 = document.querySelector('#saveNote2');
input_textarea2.value = localStorage.getItem('data2');
saveNote2.addEventListener('click', updateOutput2);
function updateOutput2() {
    localStorage.setItem('data2', input_textarea2.value);
};

var input_textarea3 = document.querySelector('#note3');
var save_button3 = document.querySelector('#saveNote3');
input_textarea3.value = localStorage.getItem('data3');
saveNote3.addEventListener('click', updateOutput3);
function updateOutput3() {
    localStorage.setItem('data3', input_textarea3.value);
};

var input_textarea4 = document.querySelector('#note4');
var save_button4 = document.querySelector('#saveNote4');
input_textarea4.value = localStorage.getItem('data4');
saveNote4.addEventListener('click', updateOutput4);
function updateOutput4() {
    localStorage.setItem('data4', input_textarea4.value);
};

var input_textarea5 = document.querySelector('#note5');
var save_button5 = document.querySelector('#saveNote5');

input_textarea5.value = localStorage.getItem('data5');
saveNote5.addEventListener('click', updateOutput5);
function updateOutput5() {
    localStorage.setItem('data5', input_textarea5.value);
};

var input_textarea6 = document.querySelector('#note6');
var save_button6 = document.querySelector('#saveNote6');
input_textarea6.value = localStorage.getItem('data6');
saveNote6.addEventListener('click', updateOutput6);
function updateOutput6() {
    localStorage.setItem('data6', input_textarea6.value);
};

var input_textarea7 = document.querySelector('#note7');
var save_button7 = document.querySelector('#saveNote7');
input_textarea7.value = localStorage.getItem('data7');
saveNote7.addEventListener('click', updateOutput7);
function updateOutput7() {
    localStorage.setItem('data7', input_textarea7.value);
};

var input_textarea8 = document.querySelector('#note8');
var save_button8 = document.querySelector('#saveNote8');
input_textarea8.value = localStorage.getItem('data8');
saveNote8.addEventListener('click', updateOutput8);
function updateOutput8() {
    localStorage.setItem('data8', input_textarea8.value);
};

var input_textarea9 = document.querySelector('#note9');
var save_button9 = document.querySelector('#saveNote9');
input_textarea9.value = localStorage.getItem('data9');
saveNote9.addEventListener('click', updateOutput9);
function updateOutput9() {
    localStorage.setItem('data9', input_textarea9.value);
};


//color change of time code  
var now = new Date().getHours();
if (now > 9) {
    $("#note1").addClass("past");
}
else if (now >= 9 && now < 10) {
    $("#note1").addClass("present");
}
else if (now < 9) {
    $("#note1").addClass("future");
}
if (now > 10) {
    $("#note2").addClass("past");
}
else if (now >= 10 && now < 11) {
    $("#note2").addClass("present");
}
else if (now < 10) {
    $("#note2").addClass("future");
}
if (now > 11) {
    $("#note3").addClass("past");
}
else if (now >= 11 && now < 12) {
    $("#note3").addClass("present");
}
else if (now < 11) {
    $("#note3").addClass("future");
}
if (now > 12) {
    $("#note4").addClass("past");
}
else if (now >= 12 && now < 13) {
    $("#note4").addClass("present");
}
else if (now < 12) {
    $("#note4").addClass("future");
}
if (now > 13) {
    $("#note5").addClass("past");
}
else if (now >= 13 && now < 14) {
    $("#note5").addClass("present");
}
else if (now < 13) {
    $("#note5").addClass("future");
}
if (now > 14) {
    $("#note6").addClass("past");
}
else if (now >= 14 && now < 15) {
    $("#note6").addClass("present");
}
else if (now < 14) {
    $("#note6").addClass("future");
}
if (now > 15) {
    $("#note7").addClass("past");
}
else if (now >= 15 && now < 16) {
    $("#note7").addClass("present");
}
else if (now < 15) {
    $("#note7").addClass("future");
}
if (now > 16) {
    $("#note8").addClass("past");
}
else if (now >= 16 && now < 17) {
    $("#note8").addClass("present");
}
else if (now < 16) {
    $("#note8").addClass("future");
}
if (now > 17) {
    $("#note9").addClass("past");
}
else if (now >= 17 && now < 18) {
    $("#note9").addClass("present");
}
else if (now < 17) {
    $("#note9").addClass("future");
}


