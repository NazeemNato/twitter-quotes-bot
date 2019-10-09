var tags4day = ""
function myDate(){

    var a = new Date();
    var r = a.getDay();
    return r
}
    if (myDate() == 0) {
	tags4day = "#SundayQuotes"
    }
    else if (myDate() == 1) {
	tags4day = "#MondayQuotes #MondayMotivation"
    }
    else if (myDate() == 2) {
	tags4day = "#TuesdayQuotes"
    }else if (myDate() == 3) {
	tags4day = "#WednesdayQuotes"
    }
    else if (myDate() == 4) {
	tags4day = "#ThursdayQuotes"
    }
    else if (myDate() == 5) {
	tags4day = "#FridayQuotes"
    }
    else {
	tags4day = "#SaturdayQuotes"
    }
module.exports = tags4day