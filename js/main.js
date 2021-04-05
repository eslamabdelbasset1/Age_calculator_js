// Variables For Date Calculate
var dateCalculate = document.getElementById("dateCalculate");
var chooseDate = document.getElementById("chooseDate");

// Variables For Prinitng Values
var ageYear = document.getElementById("ageYear");
var ageMonth = document.getElementById("ageMonth");
var ageDays = document.getElementById("ageDays");
var ageHours = document.getElementById("ageHours");
var ageSeconds = document.getElementById("ageSeconds");
var ageMilliseconds = document.getElementById("ageMilliseconds");

dateCalculate.addEventListener('change', function(){
    var options = { year: 'numeric', month: 'long', day: 'numeric'};
    var selectDate = new Date(this.value);
    var DOB = selectDate.toLocaleDateString('en-US', options);

    chooseDate.innerHTML = "DOB : " + " " + DOB;

    var milliseconds_DOB = Date.parse(DOB);
    var milliseconds_Now = Date.now();

    var totalMilliseconds = milliseconds_Now - milliseconds_DOB;

    var milliseconds = totalMilliseconds;
    var second = 1000;
    var minute = second*60;
    var hour = minute*60;
    var day = hour*24;
    var month = day*30;
    var year = day*365;

    // NOW START THE CALCULATION
    var years = Math.round(milliseconds/year);
    var months = years*12;
    var days = years*365;
    var hours = Math.round(milliseconds/hour);
    var seconds = Math.round(milliseconds/second);

    // Now it is time to print values in boxes
    ageYear.innerHTML = years;
    ageMonth.innerHTML = months;
    ageDays.innerHTML = days;
    ageHours.innerHTML = hours;
    ageSeconds.innerHTML = seconds;
    ageMilliseconds.innerHTML = milliseconds;

    document.querySelector('.age-calc').classList.add('expand');
});

