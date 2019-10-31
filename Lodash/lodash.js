const _ = require("lodash");

const p = { age: 24, name: "Rebecca", occupation: "teacher" };

_.forIn(p, (v, key) => {

    console.log(`${key}: ${v}`);
})
