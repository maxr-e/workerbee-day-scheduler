
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  $(".saveBtn").on("click", function () {
    
    const text = $(this).siblings(".description").val();
    const time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

  function looper() {
    //gets current time in 2400 time
    const rightNow = dayjs().format("HH");
    console.log(rightNow, "current time");

    //loop over blocks in html
    $(".time-block").each(function () {
      const unit = parseInt($(this).attr("id").split("hour-")[1]);
      console.log(unit,"unit of time");

      //adds color class to time description blocks
      if (unit < rightNow) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      }
      else if (unit == rightNow) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
      }
      else {
        $(this).removeClass("present");
        $(this).addClass("future");
        $(this).removeClass("past");
      }
    })
  }

  //retrieve data from local storage on refresh
  $("hour-6 .description").val(localStorage.getItem("hour-6"));
  $("hour-7 .description").val(localStorage.getItem("hour-7"));
  $("hour-8 .description").val(localStorage.getItem("hour-8"));
  $("hour-9 .description").val(localStorage.getItem("hour-9"));
  $("hour-10 .description").val(localStorage.getItem("hour-10"));
  $("hour-11 .description").val(localStorage.getItem("hour-11"));
  $("hour-12 .description").val(localStorage.getItem("hour-12"));
  $("hour-13 .description").val(localStorage.getItem("hour-12"));
  $("hour-14 .description").val(localStorage.getItem("hour-14"));
  $("hour-15 .description").val(localStorage.getItem("hour-15"));
  $("hour-16 .description").val(localStorage.getItem("hour-16"));
  $("hour-17 .description").val(localStorage.getItem("hour-17"));
  $("hour-18 .description").val(localStorage.getItem("hour-18"));

  //call function
  looper();

  //display today's date
  const todayEl = $('#currentDay');
  function today() {
    const ahora = dayjs().format('dddd, MMM DD, YYYY');
    todayEl.text(ahora);
  }
  today();
})
