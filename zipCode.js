/*import required modules */
//const cheerio=require("cheerio");
//const request=require('request');

import cheerio from "cheerio";
import request from "request";

/*list of states hardcoded into an object*/
let states={'Alabama':[],
'Alaska':[],
'Arizona':[], 
'Arkansas':[],
'California':[],
'Colorado':[],
'Connecticut':[],
'Delaware':[],
'Florida':[],
'Georgia':[],
'Hawaii':[],
'Idaho':[],
'Illinois':[],
'Indiana':[],
'Iowa':[],
'Kansas':[],
'Kentucky':[],
'Louisiana':[],
'Maine':[],
'Maryland':[],
'Massachusetts':[],
'Minnesota':[],
'Mississippi':[],
'Missouri':[],
'Montana':[],
'Nebraska':[],
'Nevada':[],
'New Hampshire':[],
'New Jersey':[],
'New Mexico':[],
'New York':[],
'North Carolina':[],
'North Dakota':[],
'Ohio':[],
'Oklahoma':[],
'Oregon':[],
'Pennsylvania':[],
'Rhode Island':[],
'South Carolina':[],
'South Dakota':[],
'Tennessee':[],
'Texas':[],
'Utah':[],
'Vermont':[],
'Virginia':[],
'Washington':[],
'West Virginia':[],
'Wisconsin':[],
'Wyoming':[]
}


for (let i = 0; i < Object.keys(states).length-1; i++) {
   /* Checks each state */

    request({
        method: 'GET',
        url: 'https://www.zipcodestogo.com/'.concat(Object.keys(states)[i]
        .concat("/"))
    }, (err, res, body) => {

        if (err) return console.error(err);

        let $ = cheerio.load(body);

        let a = $('a');
        for (let i=0; i<a.text().length-1; i++) {
            if (typeof a.text()[i]==="number") {
            console.log(a.text()[i]);
            }
        }

    }); }
