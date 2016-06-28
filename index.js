// add code here
// var ms, sec, min, hr = 0;
var ms = 0;
var sec = 0;
var min = 0;
var hr = 0;
var printmin = "00";
var printms = "00";
var printsec = "00";
var stopwatch;

var start = function() {
  ms += 1;
  if (ms.toString().length < 2) {
    printms = "0"+ms.toString()
  } else {
    printms = ms.toString();
  }

  if (ms/100 == 1) {
    ms = 0;
    printms = "00"
    sec += 1;
  }

  if (sec.toString().length < 2) {
    printsec = "0"+sec.toString()
  } else {
    printsec = sec.toString();
  }

  if (sec/60 == 1) {
    sec = 0;
    printsec = "00"
    min += 1;
  }

  if (min.toString().length < 2) {
    printmin = "0"+min.toString()
  } else {
    printmin = min.toString();
  }
  //
  // if (min%60 == 0) {
  //   min = 0;
  //   var printmin = "00"
  //   hr += 1;
  // }



  $(".display").text(printmin + ":" + printsec + ":" + printms)
};

$(document).ready(function() {
  $("#stopWatch").find(".start").click(function () {
    $(this).prop('disabled', true);
    var a = start;
    stopwatch = setInterval(a, 10);
    return
  });

  $("#stopWatch").find(".stop").click(function () {
    clearInterval(stopwatch);
    $("#stopWatch").find(".start").prop('disabled', false);
  });

  $("#stopWatch").find(".reset").click(function () {
    ms = 0;
    sec = 0;
    min = 0;
    hr = 0;
    printmin = "00";
    $(".display").text("00:00:00")
  });


  $("#stopWatch").find(".startB").click(function () {
    $(this).prop('disabled', true);
    var b =  start;
    stopwatchB = setInterval(b, 10);
    return
  });

  $("#stopWatch").find(".stopB").click(function () {
    clearInterval(stopwatchB);
    $("#stopWatch").find(".startB").prop('disabled', false);
  });

  $("#stopWatch").find(".resetB").click(function () {
    ms = 0;
    sec = 0;
    min = 0;
    hr = 0;
    printmin = "00";
    $(".displayB").text("00:00:00")
  });
})
