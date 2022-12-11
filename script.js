// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentTime = 9;
//var currentTime = dayjs().format('H');
console.log(currentTime);


var rootEl = $('#root');
//console.log gust for test:
//console.log(rootEl);
var currentDayDisplayEl = $('#currentDay');

//function displaying current Day in the head
function displayCurrentDay() {
  var today = dayjs().format('dddd, MMMM DD');
  currentDayDisplayEl.text(today);
}

//I want to create list of lines from 9AM to 5PM:
var hoursOfDay = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM',];
var hoursClass = ['hour-9', 'hour-10','hour-11','hour-12','hour-13','hour-14','hour-15','hour-16','hour-17'];
var timeArray = ['9','10','11','12','13','14','15','16','17'];


 for (let i = 0; i < hoursOfDay.length; i++) {
  console.log(hoursOfDay[i]);

  var mainBoxEl = $('<div>');
  mainBoxEl.attr('id',hoursClass[i]);
  mainBoxEl.attr('class', 'row time-block');
  rootEl.append(mainBoxEl);

  //compare the time and change the color of the box
//class = past, present or future
    if (currentTime == Number(timeArray[i])){
    console.log('present');
    mainBoxEl.addClass('present');
    }
    else if (currentTime > Number(timeArray[i])){
    console.log('past');
    mainBoxEl.addClass('past');
    }
    else {
    console.log('future');
    mainBoxEl.addClass('future');
    }


  
  var hourBoxEl = $('<div>').text(hoursOfDay[i]);
  hourBoxEl.attr('class', 'col-2 col-md-1 hour text-center py-3');
  mainBoxEl.append(hourBoxEl);
  
  var textAreaEl = $('<textarea>');
  textAreaEl.attr('class', 'col-8 col-md-10 description');
  textAreaEl.attr('raw', '3');
  mainBoxEl.append(textAreaEl);

  var SaveButtonEl = $('<button>');
  SaveButtonEl.attr('class','btn saveBtn col-2 col-md-1');
  SaveButtonEl.attr('aria-label', 'save');
  mainBoxEl.append(SaveButtonEl);

  var insideButtonEl = $('<i>');
  insideButtonEl.attr('class', 'fas fa-save');
  insideButtonEl.attr('aria-hidden', 'true');
  SaveButtonEl.append(insideButtonEl);
 } 


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});




displayCurrentDay();