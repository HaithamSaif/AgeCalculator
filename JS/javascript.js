
function cal(){

    var nawDate = new Date();
    var Day = nawDate.getDate(),
        month = nawDate.getMonth() + 1,
        year = nawDate.getFullYear();  

    var yearList = document.getElementById("dateListYear");
    var getYear = yearList.options[yearList.selectedIndex].value;
    var monthList = document.getElementById("dateListMonth");
    var getMonth = monthList.options[monthList.selectedIndex].value;
    var dayList = document.getElementById("dateListDay");
    var getDay = dayList.options[dayList.selectedIndex].value;  

/******** To calculate the age (Years - Months - Days) *********/

    var Y = (year - getYear);
    if (month >= getMonth)
    var M = month - getMonth;
    else {
    Y--;
    var M = 12 + month - getMonth;
    }
    if (Day >= getDay)
    var D = Day - getDay;
    else {
    M--;
    var D = 31 + Day - getDay;
    if (M < 0) {
      M = 11;
      Y--;
        }
    }

/***************************************************************/

/**************** To know the next Birthday Day ****************/
    var weekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday']

    var nextBirthdayString = (getYear.toString() + " " + getMonth.toString() + " " + getDay.toString());
    var nextBDDate = new Date(nextBirthdayString);
    var dayName = weekDays[nextBDDate.getDay()];
    
/****************************************************************/

/***** To found how many months and days to next birth day ******/
    var nextBirthmonth = 0,
        nextBirthday = 0;
    if(getDay == Day && getMonth == month){
        nextBirthmonth = 12 - M;
        nextBirthday = 0;
    }
    else if (getDay != Day){
        nextBirthmonth = 11 - M ;
        if(getMonth == 2)
            nextBirthday = 28 - D;
        else if(getMonth == 1 || getMonth == 3 || getMonth == 5 || getMonth == 7 || getMonth == 8 || getMonth == 10 || getMonth == 12)
            nextBirthday = 30 - D;
        else if (getMonth == 4 || getMonth == 6 || getMonth == 9 || getMonth == 11)
            nextBirthday = 31 - D;
    }
/*********************************************************************/
    var leap = Y / 4; 
    
    document.getElementById("ageViewYears").innerHTML = Y;
    document.getElementById("viewMonthDay").innerHTML = (M + " Months" + " | " + D + " Days");
    document.getElementById("nextBDDayText").innerHTML = dayName;
    document.getElementById("nextBDMonthDay").innerHTML = (nextBirthmonth + " Months" + " | " + nextBirthday + " Days");
    document.getElementById("summaryYearsView").innerHTML = Y;
    document.getElementById("summaryMonthsView").innerHTML = Y * 12 + M;
    document.getElementById("summaryWeeksView").innerHTML = ((Y * 12) * 4) + (M * 4);
    document.getElementById("summaryDaysView").innerHTML = ((Y * 365) + (M * 30.25) + leap);
    document.getElementById("summaryHoursView").innerHTML = ((((M * 30) * 24) + (D * 24)) + ((365 * 24) * Y) + (leap * 24)); 
    document.getElementById("summaryMinutesView").innerHTML = (((365 * 24) * 60) * Y) + (leap * 24 * 60);
            
}