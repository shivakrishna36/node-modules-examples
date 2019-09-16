const nodeGeocoder = require('node-geocoder');
const options = {
    provider: 'google',
    httpAdapter: 'https', // Default
    apiKey: '',//api key value
    formatter: null
}

const geocoder = nodeGeocoder(options);
/**
 * This Function Finds Location
 *
 * @param {*} params
 * @returns location
 */
function locationFinder(params){
    
    let location = geocoder.reverse(params);
    console.log("Location coming from response", location);
    location.then((data)=>{
        console.log('Location Found');
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=>{
        location=null; 
        console.log("Currently user has disabled the location inside catch block",location);
        console.log('Location Rejected ');
        error.name = constant.errorCodes.location;
       
    });

    return location;
}

let address = locationFinder({
    lat: 18.9460427,
    lon: 72.8332715
});

console.log("address",address);