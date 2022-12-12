var currentTime = dayjs().format('H');
var rootEl = $('#root');
var currentDayDisplayEl = $('#currentDay');

function displayCurrentDay() {
  var today = dayjs().format('dddd, MMMM DD');
  currentDayDisplayEl.text(today);
};

var hoursOfDay = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM',];
var hoursClass = ['hour-9', 'hour-10','hour-11','hour-12','hour-13','hour-14','hour-15','hour-16','hour-17'];
var timeArray = ['9','10','11','12','13','14','15','16','17'];


 for (let i = 0; i < hoursOfDay.length; i++) {

  var mainBoxEl = $('<div>');
  mainBoxEl.attr('id',hoursClass[i]);
  mainBoxEl.attr('class', 'row time-block');
  rootEl.append(mainBoxEl);

    if (currentTime == Number(timeArray[i])){
    mainBoxEl.addClass('present');
    }
    else if (currentTime > Number(timeArray[i])){
    mainBoxEl.addClass('past');
    }
    else {
    mainBoxEl.addClass('future');
    };
  
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
 }; 


$(".time-block").each(function() {
  var id = $(this).attr("id");  
  var description = localStorage.getItem(id); 
  $(this).find(".description").val(description);
});

$(".saveBtn").click(function() {
  var timeBlock = $(this).closest(".time-block"); 
  var idOfEl = timeBlock.attr("id");
  var textareaElement = $('#' + idOfEl + ' > textarea.col-8.col-md-10.description');
  
  var inputValue = textareaElement.val();
  localStorage.setItem(idOfEl,inputValue);
});

displayCurrentDay();