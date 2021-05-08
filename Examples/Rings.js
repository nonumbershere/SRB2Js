const hack = require('@lapideofficial/srb2js');
hack.inject(function() {
    console.log("Injected");
}, function() {
    console.log("Cannot inject");
});
hack.addRings(1);
console.log(hack.rings);
console.log(hack.returnRings())
