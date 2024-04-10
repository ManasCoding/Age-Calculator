let datePicker = document.querySelector("#datePicker");
let choseDate = document.querySelector("#choseDate");


let ageYear = document.querySelector("#ageYear");
let ageMonth = document.querySelector("#ageMonth");
let ageDays = document.querySelector("#ageDays");
let ageHours = document.querySelector("#ageHour");
let ageMins = document.querySelector("#ageMin");
let ageSec = document.querySelector("#ageSec");


datePicker.addEventListener("change", (e) => {
    console.log(e);

    let options = {year: "numeric", month: "long", day: "numeric"};
    let target = e.target;
    let selecteDate = new Date(target.value);
    let DOB = selecteDate.toLocaleDateString("en-us", options);
    console.log("DOB is : " + DOB);
    choseDate.innerHTML = "DOB: " + DOB;

    let miliSecondBtw = Date.parse(DOB);
    let miliSecondNow = Date.now();

    let ageMiliSecond = miliSecondNow - miliSecondBtw;
    console.log(ageMiliSecond);

    let miliSeconds = ageMiliSecond;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let month = day * 30;
    let year = day * 365;

    let years = Math.floor(miliSeconds/year);
    let months = years * 12;
    let days = years * 365;
    let hours = Math.floor(miliSeconds/hour).toLocaleString("en-IN");
    let mins = Math.floor(miliSeconds/minute).toLocaleString("en-IN");
    let seconds = Math.floor(miliSeconds/second).toLocaleString("en-IN");



    ageYear.innerHTML = years;
    //ageMonth.innerHTML = months;
    ageDays.innerHTML = days;
    ageHours.innerHTML = hours;
    ageMins.innerHTML = mins;
    ageSec.innerHTML = seconds;
})