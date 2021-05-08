var mem = require('memoryjs');
var chalk = require('chalk');
var current = module.exports;
module.exports.isInjected = false;
module.exports.handle = null;
module.exports.data = null;
module.exports.module = null;
module.exports.pid = 0000;
module.exports.mainModule = null;
module.exports.inject = function (ifInjected, ifNot, output) {
    mem.openProcess("srb2win.exe", function (err, data) {
        if (err) {
            if (ifNot) {
                ifNot()
            } else {
                console.log(chalk.red("Cannot attach to process."));
                return false
            };

            current.isInjected = false;
            current.data = null;
            current.handle = null;
            current.module = null;
            current.mainModule = null;
            current.pid = 0000;
        } else {
            current.data = data;
            current.handle = data.handle;
            current.pid = data.th32ProcessID;
            mem.findModule("srb2win.exe", data.th32ProcessID, function (err, data1) {
                if (err) {
                    return null;
                } else {
                    current.module = data1.modBaseAddr;
                    current.mainModule = data1;
                }
            })
            current.isInjected = true;
            if (ifInjected) {
                ifInjected()
            } else {
                console.log(chalk.green("Injected!"))
            };
        }
    })
    if (output) output();
}
module.exports.write = function (address, value, type, output) {
    mem.writeMemory(current.handle, address, value, type);
    if (output) output();
}
module.exports.smartWrite = function (address, value, type, output) {
    mem.writeMemory(current.handle, address + current.module, value, type);
    if (output) output();
}
module.exports.offsets = {
    rings: 0x4DBFD8,
    score: 0x4DC048,
    speed: 0x4DC052,
    lives: 0x4DC090
}
module.exports.setRings = function (value, output, successoutput, erroroutput) {
    if (current.isInjected) {
        current.smartWrite(current.offsets.rings, value, 'INT');
        if (successoutput) successoutput();
    } else {
        if (erroroutput) erroroutput();
    }
    if (output) output();
}
module.exports.setScore = function (value, output, successoutput, erroroutput) {
    if (current.isInjected) {
        current.smartWrite(current.offsets.score, value, 'INT');
        if (successoutput) successoutput();
    } else {
        if (erroroutput) erroroutput();
    }
    if (output) output();
}
module.exports.setSpeed = function (value, output, successoutput, erroroutput) {
    if (current.isInjected) {
        current.smartWrite(current.offsets.speed, value, 'INT');
        if (successoutput) successoutput();
    } else {
        if (erroroutput) erroroutput();
    }
    if (output) output();
}
module.exports.readint = function(address, type, erroroutput) {
    return mem.readMemory
    (current.handle, address, type, function(error) {
        if (error) {
            erroroutput();
        }
    })
}
module.exports.returnRings = function (output, successoutput, erroroutput) {
    if (current.isInjected) {
         current.readint(current.offsets.rings, 'int');

        if (successoutput) successoutput();
    } else {
        if (erroroutput) erroroutput();
    }
    if (output) output();
}
module.exports.returnScore = function (output, successoutput, erroroutput) {
    if (current.isInjected) {
         current.readint(current.offsets.score, 'int');

        if (successoutput) successoutput();
    } else {
        if (erroroutput) erroroutput();
    }
    if (output) output();
}
module.exports.returnSpeed = function (output, successoutput, erroroutput) {
    if (current.isInjected) {
        current.readint(current.offsets.speed, 'int');

        if (successoutput) successoutput();
    } else {
        if (erroroutput) erroroutput();
    }
    if (output) output();
}
module.exports.addRings = function (value, output, successoutput, erroroutput) {
    if (current.isInjected) {
        var currentValue = current.returnRings();
        var lastValue = currentValue - value;
        current.setRings(lastValue);

        if (successoutput) successoutput();
    } else {
        if (erroroutput) erroroutput();
    }
    if (output) output();
}
module.exports.addSpeed = function (value, output, successoutput, erroroutput) {
    if (current.isInjected) {
        var currentValue = current.returnSpeed();
        var lastValue = currentValue - value;
        current.setRings(lastValue);

        if (successoutput) successoutput();
    } else {
        if (erroroutput) erroroutput();
    }
    if (output) output();
}
module.exports.addScore = function (value, output, successoutput, erroroutput) {
    if (current.isInjected) {
        var currentValue = current.returnScore();
        var lastValue = currentValue - value;
        current.setRings(lastValue);

        if (successoutput) successoutput();
    } else {
        if (erroroutput) erroroutput();
    }
    if (output) output();
}
module.exports.smartOffsets = {
    rings: current.offsets.rings + current.module,
    score: current.offsets.socre + current.module,
    speed: current.offsets.speed + current.module
}
