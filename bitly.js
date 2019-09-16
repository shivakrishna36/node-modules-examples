const bitly = require('bitly');
const encodeUrl = require('encodeurl');
const BitlyClient = new bitly.BitlyClient('here enter id');//enter id string value

var toEncodeUrl = `?api=1&query=${18.9460427},${72.8332715}`;
var bitLyLocation = encodeUrl(toEncodeUrl);
var bitlyUrl = `https://www.google.com/maps/search/` + bitLyLocation;
async function url() {
let locationurl = await BitlyClient.shorten(bitlyUrl);

console.log("url",locationurl);
}

url();