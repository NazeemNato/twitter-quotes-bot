console.log("-----------------------------------")
console.log("|      Welcome to Auto Quote bot   |")
console.log("-----------------------------------")

const Twit = require('twit') //Importing twitter module from twit 
const config = require('./api/config') //API keys
const tags4day = require('./lib/dayTags')//Optional tags
const Data = require('./lib/data/quotes')//Quotes data
//Twitter auth
const T = new Twit(config)
//Bot 
SetTi()
setInterval(SetTi,1000*60*30)
function SetTi(){
var data
let randomNumber = Math.floor((Math.random() * Data.length) + 1)
data = Data[randomNumber]
var tweet = { 
	status: '" '+data.quoteText+ ' "'  + ' \ '+ ' by ' + data.quoteAuthor + ' \ ' + tags4day + " #Quotes #QuotesForYou"
}

T.post('statuses/update', tweet , twDone)
 function twDone(err, data, response) {
 	if (err) {
 		console.log("Error Xd")
 	}
 	else{
    console.log("Tweeted")
}
}
}
