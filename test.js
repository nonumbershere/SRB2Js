var hack = require('./client');
hack.inject(function() {
    console.log("r");
}, function() {
    console.log("e");
});
hack.setRings(9999)