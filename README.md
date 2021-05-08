# How To Use
1) You must have Node.js installed.
2) Install the package, open the terminal go to the DIR and enter "npm i @lapideofficial/srb2js".
3) View the [Github](https://github.com/nonumbershere/SRB2Js) for more detail.

# Updates
~ Nothing

# Includes
- Injection (including check if injected or not)
- Memory
- Add/Remove values
- Read/Write Addresses
- Offsets
~ PID
~ Handle
~ Data
~ Module and Main Module
~ Return Values

# Added
~ Add Rings
~ Add Score
~ Add Spede
~ Remove Rings
~ Remove Score
~ Remove Speed
~ PID
~ Return Rings, Score, Speed


# Examples
```js
var client = require('@lapideofficial/srb2js');
client.inject();
client.addRings(10); // Adds rings by 10
```